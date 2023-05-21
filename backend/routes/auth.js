const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'harryisagoodb$oy';

router.post('/createuser',[
    body('name','Name is required').notEmpty(),
    body('email','Invalid email address').isEmail(),
    body('password','Password must be at least 6 characters').isLength({ min: 6 })
  ], async (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try{
            //check whether the user with this email exists already
            const existingUser = await User.findOne({email: req.body.email});
            if(existingUser){
                return res.status(400).json({error:"This a user with this email already exist"})
            }

            const salt = await bcrypt.genSaltSync(10);
            const secPass = await bcrypt.hash(req.body.password,salt);

            const user = await User.create({
                name:req.body.name,
                email:req.body.email,
                password:secPass
            })
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'shhhhh');
            // console.log(token) 

            res.json({token})
        }catch(error){
            console.error(error.message);
            res.status(500).send("Some error occured")
        }
})
module.exports = router
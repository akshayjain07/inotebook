// const express = require('express');
// const router = express.Router();
// const { body, validationResult } = require('express-validator');
// const User = require('../models/User')


// router.post('/',[
//     body('name').notEmpty().withMessage('Name is required'),
//     body('email').isEmail().withMessage('Invalid email address'),
//     body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
//   ], (req,res)=>{
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
//         }
//         console.log(req.body);
//         const user = User(req.body);
//         user.save();
//         res.send(req.body);
// })
// module.exports = router

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User')


router.post('/',[
    body('name','Name is required').notEmpty(),
    body('email','Invalid email address').isEmail(),
    body('password','Password must be at least 6 characters').isLength({ min: 6 })
  ], (req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        .then(user => res.json(user))
        .catch(err =>{
            console.log(err);
            res.status(500).json({error:'Please enter a unique value for email', message:err.message})
        })

})
module.exports = router
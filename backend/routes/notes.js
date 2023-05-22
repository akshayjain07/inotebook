const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

// Route 1: Get all the notes using: GET "/api/notes/fetchnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req,res)=>{

    try {
        const notes = await Note.find({user: req.user.id})
        res.json(notes);
    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

// Route 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/fetchallnotes', fetchuser, [
    body('title','Title must be atleast 3 characters').isLength({ min: 3 }),
    body('description','Description must be atleast 5 characters').isLength({ min: 5 }),
   ],async (req,res)=>{
    
    try {
        const {title, description, tag} = req.body;
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        
        res.json(savedNote);

    } catch(error){
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router
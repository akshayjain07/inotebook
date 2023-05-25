import React, { useState } from 'react'
import NoteContext from './noteContext'
import { v4 as uuidv4 } from 'uuid';

const NoteState = (props) => {

    const notesInitial = [
      {
        "_id": "646dfb4c69b335de035771c8",
        "user": "646b26ffa738320bf5beebf0",
        "title": "aksk",
        "description": "akskskdkfk2233",
        "tag": "dfkdfkd",
        "timeStamp": "2023-05-24T11:55:56.322Z",
        "__v": 0
      },
      {
        "_id": "646dfb4c69b335de035771ca",
        "user": "646b26ffa738320bf5beebf0",
        "title": "akfffsk",
        "description": "aksksffkdkfk",
        "tag": "dfkffdfkd",
        "timeStamp": "2023-05-24T11:55:56.746Z",
        "__v": 0
      },
      {
        "_id": "646dfb4d69b335de035771cc",
        "user": "646b26ffa738320bf5beebf0",
        "title": "akfffsk",
        "description": "aksksffkdkfk",
        "tag": "dfkffdfkd",
        "timeStamp": "2023-05-24T11:55:57.298Z",
        "__v": 0
      },
      {
        "_id": "646dfb4d69b335de035771ce",
        "user": "646b26ffa738320bf5beebf0",
        "title": "akfffsk",
        "description": "aksksffkdkfk",
        "tag": "dfkffdfkd",
        "timeStamp": "2023-05-24T11:55:57.882Z",
        "__v": 0
      },
      {
        "_id": "646ecee03870e52c02133bde",
        "user": "646b26ffa738320bf5beebf0",
        "title": "akshay jain 123",
        "description": "akshay jain 123",
        "tag": "dfkffdfkd",
        "timeStamp": "2023-05-25T02:58:40.666Z",
        "__v": 0
      },
      {
        "_id": "646ecef33870e52c02133be0",
        "user": "646b26ffa738320bf5beebf0",
        "title": "akshay jain 123",
        "description": "akshay jain 123",
        "tag": "dfkffdfkd",
        "timeStamp": "2023-05-25T02:58:59.203Z",
        "__v": 0
      },
      {
        "_id": "646ecef33870e52c02133be2",
        "user": "646b26ffa738320bf5beebf0",
        "title": "akshay jain 123",
        "description": "akshay jain 123",
        "tag": "dfkffdfkd",
        "timeStamp": "2023-05-25T02:58:59.370Z",
        "__v": 0
      },
      {
        "_id": "646ecef33870e52c02133be4",
        "user": "646b26ffa738320bf5beebf0",
        "title": "akshay jain 123",
        "description": "akshay jain 123",
        "tag": "dfkffdfkd",
        "timeStamp": "2023-05-25T02:58:59.526Z",
        "__v": 0
      }
    ]

    const[notes, setNotes] = useState(notesInitial);

      // Add a note
      const addNote = (title, description, tag) => {
        console.log("Adding a new note")
        const note = {
        "_id": uuidv4(),
        "user": "646b26ffa738320bf5beebf0",
        "title": title,
        "description": description,
        "tag": tag,
        "timeStamp": "2023-05-24T11:55:56.322Z",
        "__v": 0
      };
        // setNotes(notes.concat(note))
        setNotes([...notes, note])
      }
      
      // Delete a note
      const deleteNote = (id) => {
        console.log("deleting the note with id" + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      
      // Edit a note 
      const editNote = () => {

      }
      
    return (
        <div>
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
        </div>
    )
}

export default NoteState


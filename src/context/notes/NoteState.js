// import React, { useState } from 'react'
// import NoteContext from './noteContext'
// import { v4 as uuidv4 } from 'uuid';

// const NoteState = (props) => {

//     const host = "http://localhost:5000"

//     const notesInitial = []

//     const[notes, setNotes] = useState(notesInitial);

//     // Get all notes
//     const getNotes = async() => {
//       // API Call - fetch request 
//       const url = `${host}/api/notes/fetchallnotes`
//       const response = await fetch(url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2YjI2ZmZhNzM4MzIwYmY1YmVlYmYwIn0sImlhdCI6MTY4NDc2MDY2OH0.Bu3vzwhykazt3ohYV4Fz6q_oR0aytDHAjk8O-jJxmDo"
//         },
//       });
//       const json = await response.json(); 
//       setNotes(json)
//     }
//       // Add a note
//       const addNote = async(title, description, tag) => {
//         // API Call - fetch request 
//         const url = `${host}/api/notes/addnote`
//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2YjI2ZmZhNzM4MzIwYmY1YmVlYmYwIn0sImlhdCI6MTY4NDc2MDY2OH0.Bu3vzwhykazt3ohYV4Fz6q_oR0aytDHAjk8O-jJxmDo"
//           },
//           body: JSON.stringify({title, description, tag}), // this represents the data will be sent as the request body
//         });
//         const json = response.json(); // initially just a string of characters.initially just a string of characters. By calling response.json(), we are telling JavaScript to take the response body (the data in the response) and try to interpret it as JSON. convert the string of characters into a JavaScript object

//         // Logic to add in client
//         console.log("Adding a new note")
//         const note = {
//         "_id": uuidv4(),
//         "user": "646b26ffa738320bf5beebf0",
//         "title": title,
//         "description": description,
//         "tag": tag,
//         "timeStamp": "2023-05-24T11:55:56.322Z",
//         "__v": 0
//       };
//         // setNotes(notes.concat(note))
//         setNotes([...notes, note])
//       }
      
//       // Delete a note
//       const deleteNote = (id) => {
//         console.log("deleting the note with id" + id)
//         const newNotes = notes.filter((note)=>{return note._id!==id})
//         setNotes(newNotes)
//       }
      
//       // Edit a note 
//       const editNote = async(id, title, description, tag) => {
//         //API Call
//         const url = `${host}/api/notes/updatenote/${id}`
//         const response = await fetch(url, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2YjI2ZmZhNzM4MzIwYmY1YmVlYmYwIn0sImlhdCI6MTY4NDc2MDY2OH0.Bu3vzwhykazt3ohYV4Fz6q_oR0aytDHAjk8O-jJxmDo"
//           },
//           body: JSON.stringify({title, description, tag}), 
//         });
//         const json = await response.json(); 

//         // Logic to edit in client
//         for (let index = 0; index < notes.length; index++) {
//           const element = notes[index];
//           if(element._id === id){
//             element.title = title;
//             element.description = description;
//             element.tag = tag;
//           }
//         }
//       }
      
//     return (
//         <div>
//         <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
//             {props.children}
//         </NoteContext.Provider>
//         </div>
//     )
//   }

// export default NoteState



import React, { useState, useEffect } from 'react';
import NoteContext from './noteContext';
import { v4 as uuidv4 } from 'uuid';

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all notes
  const getNotes = async () => {
    try {
      const url = `${host}/api/notes/fetchallnotes`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNjkxMjE1YWZiZDk3MDlkMGE2ZGE4In0sImlhdCI6MTY4ODYzNzc3NH0.RLqqZ1o_UE6huSC3wDwstjgBIqL5V-A3t2u4_DhOgHI"
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    try {
      const url = `${host}/api/notes/addnote`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNjkxMjE1YWZiZDk3MDlkMGE2ZGE4In0sImlhdCI6MTY4ODYzNzc3NH0.RLqqZ1o_UE6huSC3wDwstjgBIqL5V-A3t2u4_DhOgHI"
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();

      const note = {
        _id: uuidv4(),
        user: "646b26ffa738320bf5beebf0",
        title: title,
        description: description,
        tag: tag,
        timeStamp: "2023-05-24T11:55:56.322Z",
        __v: 0
      };

      setNotes([...notes, note]);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      // backend
      const url = `${host}/api/notes/deletenote/${id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNjkxMjE1YWZiZDk3MDlkMGE2ZGE4In0sImlhdCI6MTY4ODYzNzc3NH0.RLqqZ1o_UE6huSC3wDwstjgBIqL5V-A3t2u4_DhOgHI"
        }
      });
      const json = await response.json();

      // frontend
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    try {
      const url = `${host}/api/notes/updatenote/${id}`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNjkxMjE1YWZiZDk3MDlkMGE2ZGE4In0sImlhdCI6MTY4ODYzNzc3NH0.RLqqZ1o_UE6huSC3wDwstjgBIqL5V-A3t2u4_DhOgHI"
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();

      const updatedNotes = notes.map((note) => {
        if (note._id === id) {
          return {
            ...note,
            title: title,
            description: description,
            tag: tag,
          };
        }
        return note;
      });

      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <div>
      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  );
};

export default NoteState;

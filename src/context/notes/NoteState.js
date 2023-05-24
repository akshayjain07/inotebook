import React, { useContext, useState } from 'react'
import NoteContext from './noteContext'

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
        }
      ]

    const[notes, setNotes] = useState(notesInitial);
    return (
        <div>
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
        </div>
    )
}

export default NoteState


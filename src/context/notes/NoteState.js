import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    const s1 = {
        name:"akshay",
        class:"5a"
    }
    const[state,setState] = useState(s1)
    const update = () => {
        setTimeout(()=>{
            setState({
                name:"anant",
                class:"10b"
            })
        },1000)
    }
    return (
        <div>
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
        </div>
    )
}

export default NoteState


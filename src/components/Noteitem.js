import React from 'react'

const Noteitem = (props) => {
    const {note} = props;
  return (
    <div className="col-md-3">
        <div className="card my-3">
        <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestiae quod saepe unde itaque, corrupti officiis labore odio explicabo numquam animi in nobis voluptate illo perspiciatis quia beatae repellat quas! </p>
        </div>
        </div>
    </div>
  )
}

export default Noteitem

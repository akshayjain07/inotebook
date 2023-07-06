import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: '', description: '', tag: 'default' });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: '', description: '', tag: 'default' });
  };

  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.description} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;

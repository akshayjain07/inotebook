import './App.css';
import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <React.Fragment>
        <NoteState>
          <Router>
            <Navbar/>
            <Alert message={"This is amazing react course"}/>
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
              </Routes>
            </div>
          </Router>
        </NoteState>
    </React.Fragment>
  );
}

export default App;

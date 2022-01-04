
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import NotesState from './context/notes/NotesState';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {


  return (
    
    <>
<NotesState>


    <Router>

    <Navbar/>


    <Routes>
          
        
          <Route exact path="/" element={<Home/>}></Route>

          <Route exact path="/about" element={<About/>}></Route>

          <Route exact path="/login" element={<Login/>} ></Route>
          <Route exact path="/signup" element={<SignUp/>} ></Route>

        </Routes>

    
    </Router>
    
    </NotesState>

    </>
  );
}

export default App;

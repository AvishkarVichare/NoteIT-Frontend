
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

function App() {


  return (
    
    <>
<NotesState>


    <Router>

    <Navbar/>
<div div className='container'>

    <Routes>
          
        
          <Route exact path="/" element={<Home/>}>
     
          </Route>

          <Route exact path="/about" element={<About/>}>
            
          </Route>

        </Routes>
</div>
    
    </Router>
    
    </NotesState>

    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Link,Routes,Route}from "react-router-dom"
import {Home} from "./Components/Home";
import {Contact} from "./Components/Contact";
import {About} from "./Components/About";

const App=()=>{
  return(
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;

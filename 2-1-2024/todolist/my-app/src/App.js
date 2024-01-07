import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import {Todo} from "./Components/Todo";
import {Profile} from "./Components/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Register/>}/>
        <Route path='/Todo' element={<Todo/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

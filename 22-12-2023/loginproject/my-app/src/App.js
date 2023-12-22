import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import { Home } from './Pages/Home';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

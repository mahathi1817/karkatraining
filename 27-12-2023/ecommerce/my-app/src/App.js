// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import {Buy} from "./Components/Buy"

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/' element={<Buy/>}/>
      </Routes>
      </BrowserRouter>
     </>
  );
}
export default App;

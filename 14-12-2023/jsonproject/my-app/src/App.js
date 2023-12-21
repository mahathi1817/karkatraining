import './App.css';
import React from 'react';
// import { Routes,Route } from 'react-router-dom';
import {Home} from './Home';
import {Sizeicons} from "./Sizeicon";
import {Button} from "./Button";
import {Navbar} from "./Components/Navbar"

function App() {
  return (
    <div className="App">
      <Home/>
      <Sizeicons/>
      <Button/>
      <Navbar/>
    </div>
  );
}

export default App;

// import './App.css';
// import { Button } from './Button';
// import { Routes,Route } from 'react-router-dom';
// import { Cart } from './Cart';
// import { Header } from './Header';

// function App() {
//   return (
//     <div className="App">
// <Header/>
    
//             <Routes>
          
//             <Route path='/'element={<Button/>}/>
//             <Route path='cart' element={<Cart/>}/>
//         </Routes>

//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import {Home} from "./Home"
import { About } from './About';
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom"


function App() {
  let isAuthorized=false
  return (
     <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={isAuthorized?<Home/>:<About/>}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;

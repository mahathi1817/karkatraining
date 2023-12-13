import logo from './logo.svg';
import './App.css';
import {Book} from "./Book";
import {Home} from "./Home"
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Link,useParams,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
      <div>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/book/1'>Book 1</Link></li>
        <li><Link to='/book/2'>Book 2</Link></li>
        </ul>
      </div>
    <Router>
      <Routes>
        <Route path='/' elements={<Home/>}></Route>
        <Route path='/book/:ai' elements={<Book/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

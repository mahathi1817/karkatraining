import logo from './logo.svg';
import './App.css';
import {Home} from "./Home";
import {Contact} from "./Contact";
import {About} from "./About";
import {Button} from "./Button"

function App() {
  return (
    <div className="App">
      <Home/>
      <Contact/>
      <About/>
      <Button/>
    </div>
  );
}
export default App;
import logo from './logo.svg';
import './App.css';
import Routing from './Components/routing';
import Navbar from './Components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routing></Routing>
    </div>
  );
}

export default App;

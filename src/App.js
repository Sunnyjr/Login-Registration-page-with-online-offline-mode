import './App.css';
import { Routes, Route } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Registerpage from './components/Registerpage';
import Finalpage from './components/Finalpage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Loginpage/>} />
        <Route exact path="/register" element={<Registerpage/>} />
        <Route exact path="/final" element={<Finalpage/>} />

      </Routes>

    </div>
  );
}

export default App;

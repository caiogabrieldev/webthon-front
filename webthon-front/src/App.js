import logo from './logo.svg';
import Inicio from './pages/Inicio';
import './App.css';
import Menu from './pages/Menu';
import Footer from './pages/Footer';
import OQueE from './pages/OqueE';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/o-que-e' element={<OQueE></OQueE>}></Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;

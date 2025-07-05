import logo from './logo.svg';
import Inicio from './pages/Inicio';
import './App.css';
import Menu from './pages/Menu';
import Footer from './pages/Footer';
import OQueE from './pages/OqueE';
import Impactos from './pages/Impactos';
import Perigos from './pages/Perigos';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/o-que-e' element={<OQueE></OQueE>}></Route>
          <Route path='/impactos' element={<Impactos></Impactos>}></Route>
          <Route path='/perigos' element={<Perigos></Perigos>}></Route>
          <Route path='/feedback' element={<Feedback></Feedback>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;

import logo from './logo.svg';
import Inicio from './pages/Inicio';
import './App.css';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
        </Routes>

      </div>
    </Router>

  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Questions from './pages/Questions';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/questions" element={<Questions />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;


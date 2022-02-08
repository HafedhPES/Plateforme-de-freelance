
import './App.css';
import Home from './pages/home';
import Project from './pages/project';
import Login from './pages/login'
import Profile from './pages/profile'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;


import './App.css';
import Home from './pages/home';
import Project from './pages/project';
import Login from './pages/login'
import Profile from './pages/profile'
import Register from "./pages/register/register";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [postuler,setPostuler]= useState(false);
  const [logout,setLogout]= useState(false);
  return (
    <Router>
      
        <Routes>
          <Route exact path="/" element={<Home postuler={postuler} setPostuler={setPostuler} logout={logout} setLogout={setLogout}/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/profile" element={<Profile logout={logout} setLogout={setLogout}/>}/>
          <Route path="/project" element={<Project logout={logout} setLogout={setLogout} postuler={postuler} setPostuler={setPostuler}/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      
    </Router>
  );
}

export default App;

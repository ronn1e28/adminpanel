import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HomePage from './components/HomePage'; 
import UserDetails from './components/UserDetails';
import UserEducation from './components/UserEducation';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';
import Register from './components/Register'
import Login from './components/Login'
import EducationDetails from './components/EducationInfo';
import {useState} from 'react';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/userdetails" element={<UserDetails />}/>
        <Route path="/usereducation" element={<UserEducation />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

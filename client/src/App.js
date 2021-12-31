import './App.css';
import React , {useState,Fragment} from 'react';
import axios from 'axios';
import Form from './components/myForm';
import Container from 'react-bootstrap/Container';
import ReactDOM from "react-dom";
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Info from './pages/Info';
import Home from './pages/Home'
function App() {




  return (
    <div className="App">


        <Navbar></Navbar>

        <Router>
      <Routes>
        <Route path="/info" element={<Info />} />
        <Route path="/form" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';
import React from 'react';
import ReceiptScanner from './pages/ReceiptScanner';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/scanner" element={<ReceiptScanner />}/>
      </Routes>
    </Router>
  );
}

export default App;
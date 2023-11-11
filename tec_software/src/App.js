//Llamar a todos los componentes
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Componente/Login/Login'; 
import Home from './Componente/HomePage/HomePage';
import GestionFactura from './Componente/GestionFactura/GestionFactura'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GestionFactura />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


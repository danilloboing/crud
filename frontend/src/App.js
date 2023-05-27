import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarRegistration from "./pages/CadastroCarros/CarRegistration";
import LoginPage from "./pages/Login/LoginPage";
import CadastroUsuario from "./pages/CadastroUser/CadastroUsuario";


function App() {
  return (
    <Router>

      <Routes>
        
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/cadastro" element={<CadastroUsuario/>} />
        <Route path="/home" element={<CarRegistration/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
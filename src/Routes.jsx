import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Cadastrar } from "./pages/Cadastrar/Cadastrar.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Inicial } from "./componentes/Cadastrar/Inicial/Inicial.jsx";
import { Informacoes } from "./componentes/Cadastrar/Informacoes/Informacoes.jsx";

// criar objeto e passar setters para componentes filhos (Nested)
// Informações1: Nome, data de nascimento (+18), localidade 
// Informações2: Github user, senha para a plataforma

const Dados = {
  
}

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cadastrar />} path="/cadastrar">
          <Route element={<Inicial />} path="" />
          <Route element={<Informacoes />} path=":informacoes1"/>
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

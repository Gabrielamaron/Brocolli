import React from "react";
import "../assets/css/base.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import { Home } from "./pages/Home/Home.jsx";
import { Cadastrar } from "./pages/Cadastrar/Cadastrar.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Inicial } from "./componentes/Cadastrar/Inicial/Inicial.jsx";
import { Informacoes1 } from "./componentes/Cadastrar/Informacoes/Informacoes1.jsx";
import { Informacoes2 } from "./componentes/Cadastrar/Informacoes/Informacoes2.jsx";

//dados de informacoes1 e informacoes2 serao obtidos por meio do retorno da função retornaDadosInformacoesX()
//onde X é 1 ou 2, obtendo as respectivas informações
//Depois, basta agrupar em um novo objeto e manipula-lo a fim de o enviar ao supabase

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cadastrar />} path="/cadastrar">
          <Route element={<Inicial />} path="" />
          <Route element={<Informacoes1 />} path="1i" />
          <Route element={<Informacoes2 />} path="2i" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

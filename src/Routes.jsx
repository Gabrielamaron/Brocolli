import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//pages
import { Home } from "./pages/Home/Home.jsx";
import { Cadastrar } from "./pages/Cadastrar/Cadastrar.jsx";
import { Login } from "./pages/Login/Login.jsx";

//nested components
import { Inicial } from "./componentes/Cadastrar/Inicial/Inicial.jsx";
import { Auth } from "./componentes/Cadastrar/Auth/Auth.jsx";
import { Informacoes } from "./componentes/Cadastrar/Informacoes/Informacoes.jsx";


export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cadastrar />} path="/cadastrar">
          <Route element={<Inicial />} path="" />
          <Route element={<Auth />} path=":auth" />
          {/* passar id do user para a página de Informacoes1 */}
          <Route element={<Informacoes />} path="1i" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}


// hook navigate
export function navigate(route) {
  useNavigate(route)
}

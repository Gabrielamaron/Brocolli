import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";



//pages
import { Home } from "./pages/Home/Home.jsx";
import { Cadastrar } from "./pages/Cadastrar/Cadastrar.jsx";
import { Login } from "./pages/Login/Login.jsx";

//nested components
import { Inicial } from "./componentes/Cadastrar/Inicial/Inicial.jsx";
import { Auth } from "./componentes/Cadastrar/Auth/Auth.jsx";
// import { Informacoes1 } from "./componentes/Cadastrar/Informacoes/Informacoes1.jsx";
// import { Informacoes2 } from "./componentes/Cadastrar/Informacoes/Informacoes2.jsx";

//Atenção: propriedades iniciadas com "_" são privadas

const dadosUsuario = {
  //informacoes1
  nomeUsuario: "",
  _dataDeNascimentoUsuario: "",
  _localidadeUsuario: "",

  setNomeUsuario(novoNome) {
    this.nomeUsuario = novoNome;
  },
  setDataDeNascimentoUsuario(novaDataDeNascimento) {
    this._dataDeNascimentoUsuario = novaDataDeNascimento;
  },
  setLocalidadeUsuario(novaLocalidade) {
    this._localidadeUsuario = novaLocalidade;
  },

  //informacoes2
  _usuarioUsuario: "",
  _senhaUsuario: "",

  setUsuarioUsuario(novoUsuario) {
    this._usuarioUsuario = novoUsuario;
  },
  setSenha(novaSenha) {
    this._senhaUsuario = novaSenha;
  },
};

// funções de atualização com os valores do formulário
export function atualizaInformacoes1(
  novoNome,
  novaDataDeNascimento,
  novaLocalidade
) {
  dadosUsuario.setNomeUsuario(novoNome);
  dadosUsuario.setDataDeNascimentoUsuario(novaDataDeNascimento);
  dadosUsuario.setLocalidadeUsuario(novaLocalidade);

  console.log(dadosUsuario);
}

export function atualizaInformacoes2(novoUsuario, novaSenha) {
  dadosUsuario.setUsuarioUsuario(novoUsuario);
  dadosUsuario.setSenha(novaSenha);

  console.log(dadosUsuario);
}

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cadastrar />} path="/cadastrar">
          <Route element={<Inicial />} path="" />
          {/* <Route element={<Informacoes1 />} path="1i" /> */}
          {/* <Route element={<Informacoes2 />} path="2i" /> */}
          <Route element={<Auth />} path=":auth" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react"

import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { supabase } from "../../services/supabase.js";


export function Homebroker() {

  console.log("Rodando código do Homebroker");

  const [dadosUsuario, setDadosUsuario] = React.useState({});
  
  if (supabase.auth.user()) {
    const usuarioLogado = supabase.auth.user();
    const { data, error } = supabase
      .from("usuario")
      .select("*")
      .match({ id: usuarioLogado.id });
      console.log(error);
  
    setDadosUsuario({
      dataNascimento: data[0].dataNascimento,
      email: usuarioLogado.email,
      id: usuarioLogado.id,
      localidade: data[0].localidade,
      nome: data[0].nome,
    });

    console.log(data);
  }

  return (
    <>
      {/* menu */}
      <Box
        className="align-items-center d-flex justify-content-start "
        sx={{
          padding: "var(--padding-padrao)",
        }}
      >
        <nav>
          <Link
            style={{
              color: "var(--fonte)",
              textDecoration: "none",
            }}
            to="/homebroker"
          >
            <Box
              className="align-items-center d-flex logo"
              sx={{
                padding: "var(--padding-padrao)",
              }}
            >
              <img
                className="logo__imagem img-fluid"
                src="../../../assets/img/logo.png"
                alt="Logo da Brocolli"
              />
              <h1>Brocolli</h1>
            </Box>
          </Link>
        </nav>
      </Box>

      <main>
        {/* boas vindas */}
        <Box
          sx={{
            padding: "var(--padding-padrao)",
          }}
        >
          <h1>Olá {dadosUsuario.nome}</h1>
        </Box>
      </main>
    </>
  );
}

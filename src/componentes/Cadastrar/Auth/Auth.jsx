import React from "react";
import { supabase } from "../../../services/supabase.js";

import { Box, TextField, Button } from "@mui/material";

export function Auth() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <Box
      className="d-flex flex-column justify-content-evenly"
      component="form"
      sx={{
        height: "var(--vh-padrao)",
        padding: "var(--padding-padrao)",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        signUp(email, senha);
      }}
    >
      {/* titulo */}
      <Box className="text-center">
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-file-person mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          Cadastre-se usando um email e crie uma senha:
        </h2>
      </Box>

      {/* email */}
      <Box
        className="w-75"
        sx={{
          padding: "var(--padding-padrao)",
        }}
      >
        <TextField
          className="w-50"
          id="filled-basic"
          label="Email"
          required
          sx={{
            backgroundColor: "var(--componentes)",
            borderRadius: "var(--borda-padrao)",
            minWidth: "15em",
          }}
          value={email}
          variant="filled"
          onChange={(event) => {
            const novoEmail = event.target.value;
            setEmail(novoEmail);
          }}
        />
      </Box>

      {/* senha */}
      <Box
        className="w-75"
        sx={{
          padding: "var(--padding-padrao)",
        }}
      >
        <TextField
          className="w-50"
          id="filled-basic"
          label="Senha"
          required
          sx={{
            backgroundColor: "var(--componentes)",
            borderRadius: "var(--borda-padrao)",
            minWidth: "15em",
          }}
          value={senha}
          variant="filled"
          type="password"
          onChange={(event) => {
            const novaSenha = event.target.value;
            setSenha(novaSenha);
          }}
        />
      </Box>

      {/* botao enviar  */}

      <Box
        className="d-flex justify-content-end w-100"
        sx={{
          padding: "var(--padding-padrao)",
          borderRadius: "var(--borda-padrao)",
        }}
      >
        <Button
          className="botao-avancar d-flex justify-content-center me-5"
          sx={{
            color: "var(--fonte)",
            textDecoration: "none",
            transition: "var(--transicao-padrao)",
          }}
          type="submit"
        >
          Avançar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-up-right-square mx-2"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
            />
          </svg>
        </Button>
      </Box>
    </Box>
  );
}

// Teste: pumpum@gmail.com
// senha: kakaka

//Prm = parameter
async function signUp(emailPrm, senha) {
  try {
    const { user, error } = await supabase.auth.signUp({
      email: emailPrm,
      password: senha,
    });

    if (error) throw error;
    console.log("Should be logged");
  } catch (error) {
    console.log(error.message);
  }
}

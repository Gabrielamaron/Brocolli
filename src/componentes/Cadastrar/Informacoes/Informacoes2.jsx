import { Box, TextField, Button } from "@mui/material";
import React from "react";
import { atualizaInformacoes2 } from "../../../Routes.jsx";

// informacoes2: usuário do Github e criar senha

export function retornaDadosInformacoes2() {
  return dadosInformacoes2;
}

export function Informacoes2() {
  //informacoes2
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  //objeto de informacoes2
  const dadosInformacoes2 = {
    usuarioDado: usuario,
    senhaDado: senha,
  };

  return (
    <Box
      className="d-flex flex-column justify-content-evenly"
      component="form"
      sx={{
        height: "80vh",
        padding: "var(--padding-padrao)",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        atualizaInformacoes2(usuario, senha);
      }}
    >
      <Box className="text-center">
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-github mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Use seu usuário do Github e crie uma senha
        </h2>
      </Box>

      {/* usuario do Github */}
      <Box
        className="w-75"
        sx={{
          padding: "var(--padding-padrao)",
        }}
      >
        <TextField
          className="w-50"
          id="filled-basic"
          label="Usuário do Github"
          required
          sx={{
            backgroundColor: "var(--componentes)",
            borderRadius: "var(--borda-padrao)",
          }}
          value={usuario}
          variant="filled"
          onChange={(event) => {
            const novoUsuario = event.target.value;
            setUsuario(novoUsuario);
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

      {/* botao enviar */}
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

function imprimirTeste(valor) {
  console.log(valor);
}

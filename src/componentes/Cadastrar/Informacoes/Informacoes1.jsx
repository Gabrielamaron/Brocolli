import * as React from "react";
import { Box, TextField, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { atualizaInformacoes1 } from "../../../Routes.jsx";
//informacoes1: nome, data de nascimento, localidade

export function Informacoes1() {
  //informacoes1
  const [nome, setNome] = React.useState("");
  const [dataNascimento, setDataNascimento] = React.useState(null);
  const [localidade, setLocalidade] = React.useState("");

  const [textoValidacaoData, setTextoValidacaoData] = React.useState("");

  return (
    <Box
      className="d-flex flex-column justify-content-evenly"
      component="form"
      onSubmit={(event) => {
        checaIdadeNovoUsuario(event, dataNascimento, setTextoValidacaoData);
        atualizaInformacoes1(nome, dataNascimento, localidade);
      }}
      sx={{
        height: "80vh",
        padding: "var(--padding-padrao)",
      }}
    >
      <Box className="text-center">
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-person-check mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            <path
              fill-rule="evenodd"
              d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
          Antes de começarmos, conte mais sobre você:
        </h2>
      </Box>
      {/* nome  */}
      <Box
        className="w-75"
        sx={{
          padding: "var(--padding-padrao)",
        }}
      >
        <TextField
          className="w-50"
          id="filled-basic"
          label="Nome"
          required
          sx={{
            backgroundColor: "var(--componentes)",
            borderRadius: "var(--borda-padrao)",
          }}
          value={nome}
          variant="filled"
          onChange={(event) => {
            const novoNome = event.target.value;
            setNome(novoNome);
          }}
        />
      </Box>
      {/* data de nascimento */}
      <Box
        className="w-75"
        sx={{
          padding: "var(--padding-padrao)",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data de Nascimento"
            value={dataNascimento}
            onChange={(novaData) => {
              setDataNascimento(novaData);
            }}
            renderInput={(params) => (
              <TextField
                className="w-50"
                required
                sx={{
                  backgroundColor: "var(--componentes)",
                  borderRadius: "var(--borda-padrao)",
                }}
                {...params}
              />
            )}
          />
        </LocalizationProvider>
        <p className="text-danger">{textoValidacaoData}</p>
      </Box>
      {/* localidade */}
      <Box
        className="w-75"
        sx={{
          padding: "var(--padding-padrao)",
        }}
      >
        <TextField
          className="w-50"
          id="filled-basic"
          label="Localidade"
          required
          sx={{
            backgroundColor: "var(--componentes)",
            borderRadius: "var(--borda-padrao)",
          }}
          value={localidade}
          variant="filled"
          onChange={(event) => {
            const novaLocalidade = event.target.value;
            setLocalidade(novaLocalidade);
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

//verificação
function checaIdadeNovoUsuario(event, dataNascimento, assessorSetTexto) {
  event.preventDefault();
  const dataAtual = new Date();
  const dataFormatada = new Date(
    dataNascimento.getFullYear() + 18,
    dataNascimento.getMonth(),
    dataNascimento.getDate()
  );

  if (!confereMaiorDeIdade(dataFormatada, dataAtual)) {
    assessorSetTexto("Você deve ser maior de idade para abrir uma conta!");
    return;
  } else {
    assessorSetTexto("");
    window.location.href = "2i";
  }
}

function confereMaiorDeIdade(dataFormatada, dataAtual) {
  return dataFormatada <= dataAtual;
}

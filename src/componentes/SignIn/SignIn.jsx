import React from "react";

import { Box, TextField } from "@mui/material";

export function SignIn() {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <Box
      className="align-items-center d-flex flex-column justify-content-evenly  mx-auto my-2 w-50"
      sx={{
        height: "70vh",
        border: "var(--borda-espessura) solid var(--componentes)",
        borderRadius: "var(--borda-padrao)",
        padding: "var(--padding-padrao)",
      }}
    >
      {/* titulo */}
      <Box
        className=" text-center w-50"
        sx={{
          padding: "var(--padding-padrao)",
        }}
      >
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-file-person-fill mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
          </svg>
          Login
        </h2>
      </Box>

      {/* email */}
      <Box
        className="d-flex justify-content-center w-100"
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
            setEmail(novoEmail, imprimeTeste(email));
          }}
        />
      </Box>
    </Box>
  );
}

function imprimeTeste(valor) {
  console.log(valor);
}

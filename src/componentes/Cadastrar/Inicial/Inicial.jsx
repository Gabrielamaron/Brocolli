import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export function Inicial() {
  return (
    <Box
      className="vh-100 w-75 d-flex flex-column justify-content-evenly mx-auto text-center"
      sx={{
        borderRadius: "var(--borda-padrao)",
        padding: "var(--padding-padrao)",
      }}
    >
      <Box
        className="w-75 mx-auto d-flex justify-content-center"
        sx={{
          backgroundColor: "var(--componentes)",
          borderRadius: "var(--borda-padrao)",
          padding: "var(--padding-padrao)",
        }}
      >
        <h2>Um mundo novo se abre para você!</h2>
      </Box>
      <Box
        className="w-75 h-50 mx-auto d-flex flex-column justify-content-around text-center"
        sx={{
          borderRadius: "var(--borda-padrao)",
          padding: "var(--padding-padrao)",
        }}
      >
        <h3>
          À partir de agora sua vida financeira não será a mesma, o mundo das
          criptomoedas te aguarda!
        </h3>
        <h4>Vamos começar?</h4>
        <Link
          className="botao-avancar mx-auto w-25"
          style={{
            borderRadius: "var(--borda-padrao)",
            color: "var(--fonte)",
            textDecoration: "none",
            transition: "var(--transicao-padrao)",
          }}
          to="1i"
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
        </Link>
      </Box>
    </Box>
  );
}

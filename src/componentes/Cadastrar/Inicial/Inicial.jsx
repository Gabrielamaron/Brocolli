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
          to=":informacoes1"
        >
          Avançar
        </Link>
      </Box>
    </Box>
  );
}

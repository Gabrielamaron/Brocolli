import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <Box
      sx={{
        padding: "var(--padding-padrao)",
        width: "17.5%",
      }}
    >
      <nav className="menu-home">
        <Link
          style={{
            borderRadius: "var(--borda-padrao)",
            transition: "var(--transicao-padrao)",
            padding: "var(--padding-padrao)",
            color: "var(--fonte)",
            textDecoration: "none",
          }}
          to="/cadastrar"
        >
          Cadastrar
        </Link>
        <Link
          style={{
            borderRadius: "var(--borda-padrao)",
            transition: "var(--transicao-padrao)",
            padding: "var(--padding-padrao)",
            color: "var(--fonte)",
            textDecoration: "none",
          }}
          to="/login"
        >
          Login
        </Link>
      </nav>
    </Box>
  );
}

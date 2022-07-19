import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export function Logo() {
  return (
      <Box
      className="logo"
        sx={{
          alignItems: "center",
          display: "flex",
          padding: "var(--padding-padrao)",
        }}
      >
        <nav>
          <Link
            style={{
              color: "var(--fonte)",
              textDecoration: "none",
            }}
            to="/"
          >
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
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
  );
}

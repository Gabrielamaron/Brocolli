import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <Box
        class="container"
        sx={{
          padding: "var(--padding-padrao)",
        }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-items"
          aria-controls="navbar-items"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="var(--componentes)"
            class="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </button>
        <Box className="collapse navbar-collapse" id="navbar-items">
          <ul className="navbar-nav menu-home me-auto mb-2 mb-lg-0">
            <li
            className="nav-item"
            >
              <Link
                className="nav-link"
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
            </li>
            <li
            className="nav-item"
            >
              <Link
                className="nav-link"
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
            </li>
          </ul>
        </Box>
      </Box>
    </nav>
  );
}

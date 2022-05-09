import { Box } from "@mui/material";

export function Footer() {
  return (
    <Box
      className="align-items-center d-flex flex-column justify-content-center mx-auto w-25"
      sx={{
        padding: "var(--padding-padrao)",
      }}
    >
      <img
        className="h-25 w-25"
        src="../../../assets/img/logo-copyright.png"
        alt="Logo de Copyright"
      />
      <p>©Brocolli</p>
      <p className="text-center">Direitos reservados</p>
    </Box>
  );
}

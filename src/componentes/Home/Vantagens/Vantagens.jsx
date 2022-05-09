import { Box } from "@mui/material";

export function Vantagens(props) {
  return (
    <Box
      className="d-flex flex-column align-items-center w-25 h-75 justify-content-around vantagens"
      sx={{ padding: "var(--padding-padrao)" }}
    >
      <Box>{props.icon}</Box>

      <Box className="text-center">
        <h3>{props.titulo}</h3>
      </Box>

      <Box className="text-center">
        <p>{props.descricao}</p>
      </Box>
    </Box>
  );
}

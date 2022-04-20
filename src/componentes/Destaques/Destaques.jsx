import { Box } from "@mui/material";

export function Destaques(props) {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        marginBottom: "5.75em",
        padding: "var(--padding-padrao)",
        justifyContent: "space-around",
      }}
    >
      <Box
        className="w-50"
        sx={{
          order: props.order,
          padding: "var(--padding-padrao)",
        }}
      >
        <h2 className="w-75">
          {props.titulo}
          {props.icon}
        </h2>
        <p className="w-50">{props.descricao}</p>
      </Box>
      <img
        src={props.imagem}
        alt={props.alt}
        className="destaques-imagem
         img-fluid h-50"
      />
    </Box>
  );
}

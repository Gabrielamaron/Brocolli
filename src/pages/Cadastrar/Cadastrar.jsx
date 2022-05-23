import { Box, createTheme } from "@mui/material";
import { Logo } from "../../componentes/Base/Logo/Logo.jsx";
import { Menu } from "../../componentes/Base/Menu/Menu.jsx";
import { Outlet } from "react-router-dom";
import "./cadastrar.css";
import { useState } from "react";

export const theme = createTheme({
  components: {
    color: "var(--componentes)",
  },
});

export function Cadastrar() {
  return (
    <>
      {/* Menu */}
      <Box
        className="align-items-center d-flex justify-content-between mx-auto my-0"
        sx={{
          padding: "var(--padding-padrao)",
          width: "95%",
        }}
      >
        <Logo />
        <Menu />
      </Box>

      {/* Outlet */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

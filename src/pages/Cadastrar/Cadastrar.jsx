import { Box } from "@mui/material";
import { Logo } from "../../componentes/Base/Logo/Logo.jsx";
import { Menu } from "../../componentes/Base/Menu/Menu.jsx";
import { Outlet } from "react-router-dom";
import "./cadastrar.css";
import { useState } from "react";

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
        <Outlet className="h-75 w-100" />
      </main>
    </>
  );
}
//Ir para Routes
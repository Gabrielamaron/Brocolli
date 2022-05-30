import { Box } from "@mui/material";
import { Logo } from "../../componentes/Base/Logo/Logo.jsx";
import { Menu } from "../../componentes/Base/Menu/Menu.jsx";
import { SignIn } from "../../componentes/SignIn/SignIn.jsx";

export function Login() {
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

      {/* SignIn */}
      <main>
        <SignIn />
      </main>
    </>
  );
}

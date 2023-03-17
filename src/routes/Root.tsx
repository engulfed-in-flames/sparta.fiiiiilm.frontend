import { Outlet } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { theme } from "../css/theme";
import Header from "./Header";

const GlobalStlye = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color:inherit
  }
  body {
    min-height: 100vh;
  }

`;

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStlye />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;

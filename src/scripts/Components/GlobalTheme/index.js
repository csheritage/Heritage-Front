import React from "react";
// Material-UI theme generator
import { ThemeProvider } from "@material-ui/styles";
// theme Object
import GlobalTheme from "./GlobalTheme";

const GlobalThemeProvider = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
);

export default GlobalThemeProvider;

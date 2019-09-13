import React, { FunctionComponent } from "react";
// Material-UI theme generator
import { ThemeProvider } from "@material-ui/styles";
// theme Object
import GlobalTheme from "./GlobalTheme";

const GlobalThemeProvider: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>{children}</ThemeProvider>
);

export default GlobalThemeProvider;

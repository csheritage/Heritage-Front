import React from "react";
// SPA main
import PageRouter from "./Routers/index";
import GlobalThemeProvider from "./Components/GlobalTheme";

function App() {
  return (
    <GlobalThemeProvider>
      <PageRouter />
    </GlobalThemeProvider>
  );
}

export default App;

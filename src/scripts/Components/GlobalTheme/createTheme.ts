import { Theme } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    jettBlack: {
      100: React.CSSProperties["color"];
      200: React.CSSProperties["color"];
      300: React.CSSProperties["color"];
      400: React.CSSProperties["color"];
      500: React.CSSProperties["color"];
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    jettBlack?: {
      100?: React.CSSProperties["color"];
      200?: React.CSSProperties["color"];
      300?: React.CSSProperties["color"];
      400?: React.CSSProperties["color"];
      500?: React.CSSProperties["color"];
    };
  }
}

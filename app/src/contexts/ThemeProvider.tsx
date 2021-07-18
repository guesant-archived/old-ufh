import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { ptBR as corePtBR } from "@material-ui/core/locale";
import { ptBR as dgPtBR } from "@material-ui/data-grid";

const theme = createTheme(
  {
    palette: {
      type: "dark",
    },
  },
  dgPtBR,
  corePtBR
);

export const ThemeProvider: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

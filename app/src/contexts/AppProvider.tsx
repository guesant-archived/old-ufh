import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <>{children}</>
      </ThemeProvider>
    </>
  );
};

export default AppProvider;

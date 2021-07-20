import CssBaseline from "@material-ui/core/CssBaseline";
import { HandlersProvider } from "@ufh/react-services/src/providers/HandlersProvider";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <HandlersProvider>
          <>{children}</>
        </HandlersProvider>
      </ThemeProvider>
    </>
  );
};

export default AppProvider;

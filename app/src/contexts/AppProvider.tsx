import CssBaseline from "@material-ui/core/CssBaseline";
import { GlobHandlersProvider } from "@ufh/react-services/src/providers/GlobHandlersProvider";
import { HandlersProvider } from "@ufh/react-services/src/providers/HandlersProvider";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <HandlersProvider>
          <GlobHandlersProvider>
            <>{children}</>
          </GlobHandlersProvider>
        </HandlersProvider>
      </ThemeProvider>
    </>
  );
};

export default AppProvider;

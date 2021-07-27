import CssBaseline from "@material-ui/core/CssBaseline";
import { GlobHandlersContextProvider } from "@ufh/react-services/src/contexts/GlobHandlersContextProvider";
import { HandlersProvider } from "@ufh/react-services/src/contexts/HandlersProvider";
import { OpenedFilesContextProvider } from "@ufh/react-services/src/contexts/OpenedFilesContextProvider";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <HandlersProvider>
          <GlobHandlersContextProvider>
            <OpenedFilesContextProvider>
              <>{children}</>
            </OpenedFilesContextProvider>
          </GlobHandlersContextProvider>
        </HandlersProvider>
      </ThemeProvider>
    </>
  );
};

export default AppProvider;

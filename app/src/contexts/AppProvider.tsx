import CssBaseline from "@material-ui/core/CssBaseline";
import { GlobHandlersProvider } from "@ufh/react-services/src/providers/GlobHandlersProvider";
import { HandlersProvider } from "@ufh/react-services/src/providers/HandlersProvider";
import { OpenedFilesContextProvider } from "@ufh/react-services/src/providers/OpenedFilesContextProvider";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";

const AppProvider: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <HandlersProvider>
          <GlobHandlersProvider>
            <OpenedFilesContextProvider>
              <>{children}</>
            </OpenedFilesContextProvider>
          </GlobHandlersProvider>
        </HandlersProvider>
      </ThemeProvider>
    </>
  );
};

export default AppProvider;

import { OpenedFile } from "../OpenedFile";
import React from "react";
import { OpenedFileContext } from "../contexts/OpenedFileContext";

export const OpenedFileContextProvider: React.FC<{ openedFile: OpenedFile }> =
  ({ openedFile, children }) => {
    return (
      <OpenedFileContext.Provider value={{ openedFile }}>
        {children}
      </OpenedFileContext.Provider>
    );
  };

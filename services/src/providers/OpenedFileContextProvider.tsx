import { AbstractOpenedFile } from "../AbstractOpenedFile";
import React from "react";
import { OpenedFileContext } from "../contexts/OpenedFileContext";

export const OpenedFileContextProvider: React.FC<{
  openedFile: AbstractOpenedFile;
}> = ({ openedFile, children }) => {
  return (
    <OpenedFileContext.Provider value={{ openedFile }}>
      {children}
    </OpenedFileContext.Provider>
  );
};

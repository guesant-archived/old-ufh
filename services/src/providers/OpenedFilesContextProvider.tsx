import { OpenedFile } from "../OpenedFile";
import { AbstractOpenedFile } from "../AbstractOpenedFile";
import { OpenedFilesContext } from "../contexts/OpenedFilesContext";
import React, { useCallback, useState } from "react";

type OpenedFilesContextProviderProps = {
  initialFiles?: AbstractOpenedFile[];
};

export const OpenedFilesContextProvider: React.FC<OpenedFilesContextProviderProps> =
  ({ children, initialFiles = [] }) => {
    const [openedFiles, setOpenedFiles] =
      useState<AbstractOpenedFile[]>(initialFiles);

    const addFiles = useCallback((files: File[]) => {
      setOpenedFiles((currentlyOpenedFiles) => {
        return ([] as AbstractOpenedFile[]).concat(
          currentlyOpenedFiles,
          files.map((file) => new OpenedFile(file))
        );
      });
    }, []);

    const removeFiles = useCallback((ids: AbstractOpenedFile["id"][]) => {
      setOpenedFiles((currentlyOpenedFiles) =>
        currentlyOpenedFiles.filter((i) => !ids.includes(i.id))
      );
    }, []);

    return (
      <OpenedFilesContext.Provider
        children={children}
        value={{ addFiles, removeFiles, list: openedFiles }}
      />
    );
  };

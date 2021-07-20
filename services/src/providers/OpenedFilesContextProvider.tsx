import { OpenedFile } from "../OpenedFile";
import { OpenedFilesContext } from "../contexts/OpenedFilesContext";
import React, { useCallback, useState } from "react";

export const OpenedFilesContextProvider: React.FC = ({ children }) => {
  const [openedFiles, setOpenedFiles] = useState<OpenedFile[]>([]);

  const addFiles = useCallback((files: File[]) => {
    setOpenedFiles((currentlyOpenedFiles) => {
      return ([] as OpenedFile[]).concat(
        currentlyOpenedFiles,
        files.map((file) => new OpenedFile(file))
      );
    });
  }, []);

  const removeFiles = useCallback((ids: OpenedFile["id"][]) => {
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

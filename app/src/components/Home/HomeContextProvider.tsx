import { OpenedFile } from "@ufh/react-services/src/OpenedFile";
import React, { useState } from "react";
import { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { OpenedFilesContext } from "@ufh/react-services/src/contexts/OpenedFilesContext";
import { HomeContext } from "./HomeContext";

export const HomeContextProvider: React.FC = ({ children }) => {
  const [openedFile, setOpenedFile] = useState<OpenedFile | null>(null);

  const openedFilesList = useContextSelector(
    OpenedFilesContext,
    ({ list }) => list
  );

  const getRotateResultIndex = useCallback(
    (rotate: number) => {
      if (openedFile) {
        const openedFileIndex = openedFilesList.findIndex(
          (i) => i.id === openedFile.id
        );
        if (openedFileIndex > -1) {
          const rotationResult = openedFileIndex + rotate;
          const resultIndex =
            rotationResult >= 0 && rotationResult < openedFilesList.length
              ? rotationResult
              : -1;
          return resultIndex;
        }
      }
      return -1;
    },
    [openedFilesList, openedFile]
  );

  const canRotate = useCallback(
    (rotate: number) => getRotateResultIndex(rotate) > -1,
    [getRotateResultIndex]
  );

  const rotate = useCallback(
    (rotate: number) => {
      const resultIndex = getRotateResultIndex(rotate);
      if (resultIndex > -1) {
        setOpenedFile(openedFilesList[resultIndex]);
      }
    },
    [getRotateResultIndex, openedFilesList]
  );

  return (
    <HomeContext.Provider
      children={children}
      value={{ openedFile, setOpenedFile, canRotate, rotate }}
    />
  );
};

import React from "react";
import { useContextSelector } from "use-context-selector";
import { OpenedFileContext } from "@ufh/react-services/src/contexts/OpenedFileContext";
import { useQuery } from "react-query";
import { EditorContext } from "./EditorContext";
import { readAsText } from "../utils/readAsText";

export const EditorContextProvider: React.FC = ({ children }) => {
  const openedFile = useContextSelector(
    OpenedFileContext,
    ({ openedFile }) => openedFile
  );

  const textContentQuery = useQuery(["monaco", openedFile!.id], () =>
    readAsText(openedFile!.file)
  );

  return (
    <EditorContext.Provider children={children} value={{ textContentQuery }} />
  );
};

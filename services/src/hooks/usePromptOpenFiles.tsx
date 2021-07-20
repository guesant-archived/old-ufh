import { OpenedFilesContext } from "../contexts/OpenedFilesContext";
import { setup_file_input } from "../utils/setup_file_input";
import { useCallback, useEffect, useRef } from "react";
import { useContextSelector } from "use-context-selector";

export const usePromptOpenFiles = () => {
  const inputRef = useRef(document.createElement("input"));

  const addFiles = useContextSelector(
    OpenedFilesContext,
    ({ addFiles }) => addFiles
  );

  useEffect(
    () => void setup_file_input(inputRef.current, addFiles),
    [inputRef, addFiles]
  );

  const promptOpenFiles = useCallback(
    () => inputRef.current.click(),
    [inputRef]
  );

  return promptOpenFiles;
};

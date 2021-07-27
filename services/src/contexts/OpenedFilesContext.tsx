import { AbstractOpenedFile } from "../AbstractOpenedFile";
import { createContext } from "use-context-selector";
import React from "react";

type IOpenedFilesContext = {
  list: AbstractOpenedFile[];
  setList: React.Dispatch<React.SetStateAction<AbstractOpenedFile[]>>;
  addFiles: (files: File[]) => void;
  removeFiles: (ids: AbstractOpenedFile["id"][]) => void;
};

export const OpenedFilesContext = createContext({} as IOpenedFilesContext);

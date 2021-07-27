import { AbstractOpenedFile } from "../AbstractOpenedFile";
import { createContext } from "use-context-selector";

type IOpenedFilesContext = {
  list: AbstractOpenedFile[];
  addFiles: (files: File[]) => void;
  removeFiles: (ids: AbstractOpenedFile["id"][]) => void;
};

export const OpenedFilesContext = createContext({} as IOpenedFilesContext);

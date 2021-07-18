import { OpenedFile } from "../services/OpenedFile";
import { createContext } from "use-context-selector";

type IOpenedFilesContext = {
  list: OpenedFile[];
  addFiles: (files: File[]) => void;
  removeFiles: (ids: OpenedFile["id"][]) => void;
};

export const OpenedFilesContext = createContext({} as IOpenedFilesContext);

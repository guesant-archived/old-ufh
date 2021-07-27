import { AbstractOpenedFile } from "../AbstractOpenedFile";
import { createContext } from "use-context-selector";

type IOpenedFileContext = {
  openedFile: AbstractOpenedFile | null;
};

export const OpenedFileContext = createContext({} as IOpenedFileContext);

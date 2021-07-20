import { OpenedFile } from "../OpenedFile";
import { createContext } from "use-context-selector";

type IOpenedFileContext = {
  openedFile: OpenedFile | null;
};

export const OpenedFileContext = createContext({} as IOpenedFileContext);

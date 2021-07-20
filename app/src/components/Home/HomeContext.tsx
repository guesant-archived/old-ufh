import { OpenedFile } from "@ufh/react-services/src/OpenedFile";
import React from "react";
import { createContext } from "use-context-selector";

type IHomeContext = {
  openedFile: OpenedFile | null;
  setOpenedFile: React.Dispatch<React.SetStateAction<OpenedFile | null>>;
};

export const HomeContext = createContext({} as IHomeContext);
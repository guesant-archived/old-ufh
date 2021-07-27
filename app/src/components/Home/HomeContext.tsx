import { AbstractOpenedFile } from "@ufh/react-services/src/AbstractOpenedFile";
import React from "react";
import { createContext } from "use-context-selector";

type IHomeContext = {
  openedFile: AbstractOpenedFile | null;
  setOpenedFile: React.Dispatch<
    React.SetStateAction<AbstractOpenedFile | null>
  >;
};

export const HomeContext = createContext({} as IHomeContext);

import React from "react";
import { createContext } from "use-context-selector";
import { IGlobHandler } from "../types/IGlobHandler";

type IGlobHandlersContext = {
  list: IGlobHandler[];
  setList: React.Dispatch<React.SetStateAction<IGlobHandler[]>>;

  removeGlobHandler: (id: IGlobHandler["_id"]) => void;
  addGlobHandler: (value?: Partial<IGlobHandler>, after?: IGlobHandler["_id"] | undefined) => void;
  updateGlobHandler: (id: IGlobHandler["_id"], updatedValue: IGlobHandler) => void;
};

export const GlobHandlersContext = createContext({} as IGlobHandlersContext);

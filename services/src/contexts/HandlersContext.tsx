import React from "react";
import { createContext } from "use-context-selector";
import { IHandlerDefinition } from "../types/IHandlerDefinition";

export type IHandlersContext = {
  getHandler: (id: IHandlerDefinition["id"]) => IHandlerDefinition | null;
  addHandler: (handler: IHandlerDefinition) => void;
  removeHandler: (id: IHandlerDefinition["id"]) => void;

  list: IHandlerDefinition[];
  setList: React.Dispatch<React.SetStateAction<IHandlerDefinition[]>>;
};

export const HandlersContext = createContext({} as IHandlersContext);

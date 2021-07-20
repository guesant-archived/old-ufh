import { GlobHandlersContext } from "@ufh/react-services/src/contexts/GlobHandlersContext";
import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import immer from "immer";
import React, { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import {
  RecipeFunction,
  EntryGlobHandlerContext,
} from "./EntryGlobHandlerContext";

export const EntryGlobHandlerContextProvider: React.FC<{
  globHandler: IGlobHandler;
}> = ({ globHandler, children }) => {
  const setGlobHandlerList = useContextSelector(
    GlobHandlersContext,
    ({ setList }) => setList
  );

  const setGlobHandler = useCallback(
    (recipe: RecipeFunction<IGlobHandler>) => {
      setGlobHandlerList((list) =>
        list.map((i) => (i._id === globHandler._id ? immer(i, recipe) : i))
      );
    },
    [globHandler._id]
  );

  return (
    <EntryGlobHandlerContext.Provider
      children={children}
      value={{ globHandler, updateGlobHandler: setGlobHandler }}
    />
  );
};

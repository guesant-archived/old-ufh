import { GlobHandlersContext } from "@ufh/react-services/src/contexts/GlobHandlersContext";
import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import produce from "immer";
import React, { useCallback, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";
import { SettingsGlobHandlerContext } from "./SettingsGlobHandlerContext";

type RecipeFunction<T> = (draft: T) => void;

export const SettingsGlobHandlerContextProvider: React.FC<{
  globHandler: IGlobHandler;
}> = ({ globHandler, children }) => {
  const setGlobHandlerList = useContextSelector(GlobHandlersContext, ({ setList }) => setList);

  const updateGlobHandler = useCallback(
    (recipe: RecipeFunction<IGlobHandler>) => {
      setGlobHandlerList((list) =>
        list.map((i) => (i._id === globHandler._id ? produce(i, recipe) : i))
      );
    },
    [globHandler._id]
  );

  const [openedConfigs, setOpenedConfigs] = useState<string[]>([]);

  const toggleConfig = useCallback((id: IHandlerDefinition["id"]) => {
    setOpenedConfigs((openedConfigs) =>
      openedConfigs.includes(id)
        ? openedConfigs.filter((i) => i !== id)
        : ([] as string[]).concat(openedConfigs, id)
    );
  }, []);

  const isConfigOpened = useCallback(
    (id: IHandlerDefinition["id"]) => openedConfigs.includes(id),
    [openedConfigs]
  );

  return (
    <SettingsGlobHandlerContext.Provider
      children={children}
      value={{
        globHandler,
        toggleConfig,
        openedConfigs,
        isConfigOpened,
        updateGlobHandler,
      }}
    />
  );
};

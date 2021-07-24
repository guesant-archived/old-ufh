import { GlobHandlersContext } from "@ufh/react-services/src/contexts/GlobHandlersContext";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";
import React, { useCallback, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { useMatchedHandlersSelectionFromGlobHandler } from "../hooks/useMatchedHandlersSelectionFromGlobHandler";
import { ISelectedHandler } from "../hooks/ISelectedHandler";
import { useOpenedFileGlob } from "../hooks/useOpenedFileGlob";
import { GlobHandlerContext } from "./GlobHandlerContext";

export const GlobHandlerContextProvider: React.FC<{}> = ({ children }) => {
  const glob = useOpenedFileGlob();

  const { selectedHandlerDefinition, setSelectedHandlerDefinition } =
    useMatchedHandlersSelectionFromGlobHandler();

  const [rememberSelection, setRememberSelection] = useState(true);

  const toggleRememberSelection = useCallback(() => setRememberSelection((value) => !value), []);

  const addGlobHandler = useContextSelector(
    GlobHandlersContext,
    ({ addGlobHandler }) => addGlobHandler
  );

  const handleSelectHandlerDefinition = useCallback(
    ({ definition, config }: ISelectedHandler) => {
      rememberSelection
        ? addGlobHandler({
            pattern: glob,
            handlers: [{ id: definition.id, config }],
          })
        : setSelectedHandlerDefinition({ definition, config });
    },
    [addGlobHandler, rememberSelection, setSelectedHandlerDefinition, glob]
  );

  return (
    <GlobHandlerContext.Provider
      children={children}
      value={{
        rememberSelection,
        toggleRememberSelection,
        handleSelectHandlerDefinition,
        selectedHandlerDefinition,
        setSelectedHandlerDefinition,
      }}
    />
  );
};

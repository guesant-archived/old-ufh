import { useCallback, useEffect, useState } from "react";
import { useMatchedGlobHandler } from "./useMatchedGlobHandler";
import { useMatchedHandlersFromGlobHandler } from "./useMatchedHandlersFromGlobHandler";
import { IMatchedHandler } from "./IMatchedHandler";
import { ISelectedHandler } from "./ISelectedHandler";

export const useMatchedHandlersSelectionFromGlobHandler = () => {
  const matchedGlobHandler = useMatchedGlobHandler();
  const matchedHandlers = useMatchedHandlersFromGlobHandler();

  const [selectedHandlerDefinition, setSelectedHandlerDefinition] =
    useState<ISelectedHandler | null>(null);

  const changeSelectedHandlerDefinition = useCallback((matchedHandler: IMatchedHandler | null) => {
    if (matchedHandler) {
      const { definition, config } = matchedHandler;
      setSelectedHandlerDefinition({ definition, config });
    } else {
      setSelectedHandlerDefinition(null);
    }
  }, []);

  useEffect(() => {
    changeSelectedHandlerDefinition(
      matchedGlobHandler && matchedHandlers?.length === 1 ? matchedHandlers[0] : null
    );
  }, [matchedGlobHandler, matchedHandlers]);

  return {
    selectedHandlerDefinition,
    setSelectedHandlerDefinition,
  };
};

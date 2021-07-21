import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";
import { useEffect, useState } from "react";
import { useMatchedGlobHandler } from "./useMatchedGlobHandler";
import { useMatchedHandlersFromGlobHandler } from "./useMatchedHandlersFromGlobHandler";

export const useMatchedHandlersSelectionFromGlobHandler = () => {
  const matchedGlobHandler = useMatchedGlobHandler();
  const matchedHandlers = useMatchedHandlersFromGlobHandler();

  const [selectedHandlerDefinition, setSelectedHandlerDefinition] =
    useState<IHandlerDefinition | null>(null);

  useEffect(() => {
    setSelectedHandlerDefinition(
      matchedGlobHandler && matchedHandlers?.length === 1
        ? matchedHandlers[0]
        : null
    );
  }, [matchedGlobHandler, matchedHandlers]);

  return {
    selectedHandlerDefinition,
    setSelectedHandlerDefinition,
  };
};

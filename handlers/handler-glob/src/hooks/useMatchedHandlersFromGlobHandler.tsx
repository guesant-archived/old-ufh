import { HandlersContext } from "@ufh/react-services/src/contexts/HandlersContext";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";
import { useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { useMatchedGlobHandler } from "./useMatchedGlobHandler";

export const useMatchedHandlersFromGlobHandler = () => {
  const matchedGlobHandler = useMatchedGlobHandler();

  const allHandlers = useContextSelector(HandlersContext, ({ list }) => list);

  const getHandler = useContextSelector(
    HandlersContext,
    ({ getHandler }) => getHandler
  );

  const [matchedHandlers, setMatchedHandlers] = useState<IHandlerDefinition[]>(
    []
  );

  useEffect(() => {
    setMatchedHandlers(
      matchedGlobHandler
        ? matchedGlobHandler.handlers.map((i) => getHandler(i)!)
        : allHandlers
    );
  }, [allHandlers, matchedGlobHandler]);

  return matchedHandlers;
};

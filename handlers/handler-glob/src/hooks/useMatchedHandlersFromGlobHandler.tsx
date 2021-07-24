import { HandlersContext } from "@ufh/react-services/src/contexts/HandlersContext";
import { useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { IMatchedHandler } from "./IMatchedHandler";
import { useMatchedGlobHandler } from "./useMatchedGlobHandler";

export const useMatchedHandlersFromGlobHandler = () => {
  const matchedGlobHandler = useMatchedGlobHandler();

  const allHandlers = useContextSelector(HandlersContext, ({ list }) => list);

  const getHandler = useContextSelector(HandlersContext, ({ getHandler }) => getHandler);

  const [matchedHandlers, setMatchedHandlers] = useState<IMatchedHandler[]>([]);

  useEffect(() => {
    setMatchedHandlers(
      matchedGlobHandler
        ? matchedGlobHandler.handlers.map(({ id, config }) => ({
            config,
            definition: getHandler(id)!,
          }))
        : allHandlers.map((definition) => ({ definition, config: {} }))
    );
  }, [allHandlers, matchedGlobHandler]);

  return matchedHandlers;
};

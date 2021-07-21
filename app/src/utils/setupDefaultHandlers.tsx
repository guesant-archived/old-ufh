import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { HandlersContext } from "@ufh/react-services/src/contexts/HandlersContext";
import { APP_DEFAULT_HANDLERS } from "../APP_DEFAULT_HANDLERS";

export const setupDefaultHandlers = () => {
  const addHandler = useContextSelector(
    HandlersContext,
    ({ addHandler }) => addHandler
  );

  const removeHandler = useContextSelector(
    HandlersContext,
    ({ removeHandler }) => removeHandler
  );

  useEffect(() => {
    for (const handler of APP_DEFAULT_HANDLERS) {
      addHandler(handler);
    }
    return () => {
      for (const handler of APP_DEFAULT_HANDLERS) {
        removeHandler(handler.id);
      }
    };
  }, []);
};

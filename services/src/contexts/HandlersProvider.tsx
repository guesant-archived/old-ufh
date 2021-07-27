import { HandlersContext } from "./HandlersContext";
import { IHandlerDefinition } from "../types/IHandlerDefinition";
import React, { useCallback, useState } from "react";

export const HandlersProvider: React.FC = ({ children }) => {
  const [list, setList] = useState<IHandlerDefinition[]>([]);

  const addHandler = useCallback((handler: IHandlerDefinition) => {
    setList((list) =>
      ([] as IHandlerDefinition[]).concat(
        list.filter((i) => i.id !== handler.id),
        handler
      )
    );
  }, []);

  const removeHandler = useCallback((id: IHandlerDefinition["id"]) => {
    setList((list) => {
      const handlerIndex = list.findIndex((i) => i.id === id);

      const [before, after] =
        handlerIndex !== -1
          ? [list.slice(0, handlerIndex), list.slice(handlerIndex + 1)]
          : [list, []];

      return ([] as IHandlerDefinition[]).concat(before, after);
    });
  }, []);

  const getHandler = useCallback(
    (id: IHandlerDefinition["id"]) => list.find((i) => i.id === id) || null,
    [list]
  );

  return (
    <HandlersContext.Provider
      children={children}
      value={{
        list,
        setList,
        getHandler,
        addHandler,
        removeHandler,
      }}
    />
  );
};

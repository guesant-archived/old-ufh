import { HandlersContext } from "../contexts/HandlersContext";
import { IHandlerDefinition } from "../types/IHandlerDefinition";
import React, { useCallback, useState } from "react";

export const HandlersProvider: React.FC = ({ children }) => {
  const [handlersList, setHandlersList] = useState<IHandlerDefinition[]>([]);

  const addHandler = useCallback((handler: IHandlerDefinition) => {
    setHandlersList((list) =>
      ([] as IHandlerDefinition[]).concat(list, handler)
    );
  }, []);

  const removeHandler = useCallback((id: IHandlerDefinition["id"]) => {
    setHandlersList((list) => {
      const handlerIndex = list.findIndex((i) => i.id === id);

      const [before, after] =
        handlerIndex !== -1
          ? [list.slice(0, handlerIndex), list.slice(handlerIndex + 1)]
          : [list, []];

      return ([] as IHandlerDefinition[]).concat(before, after);
    });
  }, []);

  const getHandler = useCallback(
    (id: IHandlerDefinition["id"]) =>
      handlersList.find((i) => i.id === id) || null,
    [handlersList]
  );

  return (
    <HandlersContext.Provider
      children={children}
      value={{
        list: handlersList,
        setList: setHandlersList,
        getHandler,
        addHandler,
        removeHandler,
      }}
    />
  );
};

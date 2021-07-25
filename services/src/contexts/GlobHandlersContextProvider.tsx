import { nanoid } from "nanoid";
import React, { useCallback, useEffect, useState } from "react";
import { GlobHandlersContext } from "./GlobHandlersContext";
import { IGlobHandler } from "../types/IGlobHandler";

const getNewGlobHandler = (): IGlobHandler => ({
  pattern: "",
  handlers: [],
  _id: nanoid(),
});

const filterGlobExplorerList = (globExplorerList: IGlobHandler[]) =>
  globExplorerList.filter((i, idx) => i.pattern.length > 0 || idx === globExplorerList.length - 1);

export const GlobHandlersContextProvider: React.FC = ({ children }) => {
  const [globHandlerList, setGlobHandlerList] = useState<IGlobHandler[]>([]);

  const addGlobHandler = useCallback((value?: Partial<IGlobHandler>, insertAfterID?: string) => {
    setGlobHandlerList((_globExplorerList) => {
      const globExplorerList = filterGlobExplorerList(_globExplorerList);

      const globHandler: IGlobHandler = {
        ...getNewGlobHandler(),
        ...value,
      };

      const startIndex = globExplorerList.findIndex((i) => i._id === insertAfterID);

      const [before, after] =
        startIndex > -1
          ? [globExplorerList.slice(0, startIndex + 1), globExplorerList.slice(startIndex + 1)]
          : [globExplorerList, []];

      return ([] as IGlobHandler[]).concat(before, globHandler, after);
    });
  }, []);

  const updateGlobHandler = useCallback((id: string, value: IGlobHandler) => {
    setGlobHandlerList((list) => {
      return list.map((i) => (i._id === id ? value : value));
    });
  }, []);

  const removeGlobHandler = useCallback((id: string) => {
    setGlobHandlerList((list) => list.filter((i) => i._id !== id));
  }, []);

  useEffect(() => {
    if (globHandlerList.length === 0) {
      addGlobHandler();
    } else if (globHandlerList.length > 1) {
      const globExplorerListFiltered = filterGlobExplorerList(globHandlerList);
      if (globExplorerListFiltered.length !== globHandlerList.length) {
        setGlobHandlerList(globExplorerListFiltered);
      }
    }
  }, [globHandlerList, addGlobHandler]);

  return (
    <GlobHandlersContext.Provider
      children={children}
      value={{
        updateGlobHandler,
        list: globHandlerList,
        setList: setGlobHandlerList,
        addGlobHandler: addGlobHandler,
        removeGlobHandler: removeGlobHandler,
      }}
    />
  );
};

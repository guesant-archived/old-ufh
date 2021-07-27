import { nanoid } from "nanoid";
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { GlobHandlersContext } from "./GlobHandlersContext";
import { IGlobHandler } from "../types/IGlobHandler";

const getNewGlobHandler = (): IGlobHandler => ({
  pattern: "",
  handlers: [],
  _id: nanoid(),
});

const filterGlobExplorerList = (list: IGlobHandler[]) =>
  list.filter((i, idx) => i.pattern.length > 0 || idx === list.length - 1);

export const GlobHandlersContextProvider: React.FC = ({ children }) => {
  const [tmpList, setTmpList] = useState<IGlobHandler[]>([]);

  const validList = useMemo(
    () => tmpList.filter((i) => i.pattern.length > 0),
    [tmpList]
  );

  const addGlobHandler = useCallback(
    (value?: Partial<IGlobHandler>, insertAfterID?: string) => {
      setTmpList((_globExplorerList) => {
        const globExplorerList = filterGlobExplorerList(_globExplorerList);

        const globHandler: IGlobHandler = {
          ...getNewGlobHandler(),
          ...value,
        };

        const startIndex = globExplorerList.findIndex(
          (i) => i._id === insertAfterID
        );

        const [before, after] =
          startIndex > -1
            ? [
                globExplorerList.slice(0, startIndex + 1),
                globExplorerList.slice(startIndex + 1),
              ]
            : [globExplorerList, []];

        return ([] as IGlobHandler[]).concat(before, globHandler, after);
      });
    },
    []
  );

  const updateGlobHandler = useCallback((id: string, value: IGlobHandler) => {
    setTmpList((list) => {
      return list.map((i) => (i._id === id ? value : value));
    });
  }, []);

  const removeGlobHandler = useCallback((id: string) => {
    setTmpList((list) => list.filter((i) => i._id !== id));
  }, []);

  useEffect(() => {
    if (tmpList.length === 0) {
      addGlobHandler();
    } else if (tmpList.length > 1) {
      const globExplorerListFiltered = filterGlobExplorerList(tmpList);
      if (globExplorerListFiltered.length !== tmpList.length) {
        setTmpList(globExplorerListFiltered);
      }
    }
  }, [tmpList, addGlobHandler]);

  return (
    <GlobHandlersContext.Provider
      children={children}
      value={{
        validList,
        list: tmpList,
        setList: setTmpList,
        updateGlobHandler,
        addGlobHandler: addGlobHandler,
        removeGlobHandler: removeGlobHandler,
      }}
    />
  );
};

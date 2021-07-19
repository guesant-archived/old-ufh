import { nanoid } from "nanoid";
import React, { useCallback, useEffect, useState } from "react";
import { GlobHandlersContext } from "../contexts/GlobHandlersContext";
import { IGlobHandler } from "../types/IGlobHandler";

const getRandomGlobHandler = (): IGlobHandler => ({
  pattern: "",
  handlers: [],
  _id: nanoid(),
});

const filterGlobExplorerList = (globExplorerList: IGlobHandler[]) =>
  globExplorerList.filter(
    (i, idx) => i.pattern.length > 0 || idx === globExplorerList.length - 1
  );

export const GlobHandlersProvider: React.FC = ({ children }) => {
  const [globExplorerList, setGlobExplorerList] = useState<IGlobHandler[]>([]);

  const addGlobExplorer = useCallback(
    (value?: Partial<IGlobHandler>, insertAfterID?: string) => {
      setGlobExplorerList((_globExplorerList) => {
        const globExplorerList = filterGlobExplorerList(_globExplorerList);

        const globHandler: IGlobHandler = {
          ...getRandomGlobHandler(),
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

  const removeGlobExplorer = useCallback((id: string) => {
    setGlobExplorerList((list) => list.filter((i) => i._id !== id));
  }, []);

  useEffect(() => {
    if (globExplorerList.length === 0) {
      addGlobExplorer();
    } else if (globExplorerList.length > 1) {
      const globExplorerListFiltered = filterGlobExplorerList(globExplorerList);
      if (globExplorerListFiltered.length !== globExplorerList.length) {
        setGlobExplorerList(globExplorerListFiltered);
      }
    }
  }, [globExplorerList, addGlobExplorer]);

  return (
    <GlobHandlersContext.Provider
      children={children}
      value={{
        list: globExplorerList,
        setList: setGlobExplorerList,
        addGlobHandler: addGlobExplorer,
        removeGlobHandler: removeGlobExplorer,
      }}
    />
  );
};

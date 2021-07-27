import React, { useCallback } from "react";
import { LibArchiveSidebarContext } from "./LibArchiveSidebarContext";
import { useEntriesQueryMatch } from "../hooks/useEntriesQueryMatch";

export const LibArchiveSidebarContextProvider: React.FC = ({ children }) => {
  const {
    match,
    searchText,
    setSearchText,
    isHighlightMode,
    setIsHighlightMode,
    dataFiltered,
  } = useEntriesQueryMatch();

  const toggleHighlightMode = useCallback(
    () => setIsHighlightMode((value) => !value),
    []
  );

  return (
    <LibArchiveSidebarContext.Provider
      children={children}
      value={{
        match,
        dataFiltered,
        searchText,
        setSearchText,
        isHighlightMode,
        toggleHighlightMode,
        setIsHighlightMode,
      }}
    />
  );
};

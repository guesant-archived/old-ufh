import { createContext } from "use-context-selector";

type ILibArchiveSidebarContext = {
  searchText: string;
  setSearchText: (value: string) => void;

  isHighlightMode: boolean;
  setIsHighlightMode: (value: boolean) => void;
  toggleHighlightMode: () => void;

  match: (pattern: string) => string[];
  dataFiltered: string[];
};

export const LibArchiveSidebarContext = createContext(
  {} as ILibArchiveSidebarContext
);

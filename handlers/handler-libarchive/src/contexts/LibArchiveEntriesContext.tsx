import { UseQueryResult } from "react-query";
import { createContext } from "use-context-selector";

type ILibArchiveEntriesContext = {
  entriesQuery: UseQueryResult<string[], unknown>;
};

export const LibArchiveEntriesContext = createContext(
  {} as ILibArchiveEntriesContext
);

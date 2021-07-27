import { AbstractOpenedFile } from "@ufh/react-services/src/AbstractOpenedFile";
import { UseQueryResult } from "react-query";
import { createContext } from "use-context-selector";

type ILibArchiveSelectedContext = {
  selected: string;
  hasSelectedFile: boolean;
  setSelected: (value: string) => void;
  selectedQuery: UseQueryResult<AbstractOpenedFile | null, unknown>;
};

export const LibArchiveSelectedContext = createContext(
  {} as ILibArchiveSelectedContext
);

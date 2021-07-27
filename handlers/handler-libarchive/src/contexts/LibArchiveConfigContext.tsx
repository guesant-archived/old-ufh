import { createContext } from "use-context-selector";
import React from "react";
import { ILibArchiveConfig } from "../types/ILibArchiveConfig";

type ILibArchiveConfigContext = {
  config: ILibArchiveConfig;
};

export const LibArchiveConfigContext = createContext(
  {} as ILibArchiveConfigContext
);

export const LibArchiveConfigContextProvider: React.FC<{
  config: ILibArchiveConfig;
}> = ({ config, children }) => {
  return (
    <LibArchiveConfigContext.Provider children={children} value={{ config }} />
  );
};

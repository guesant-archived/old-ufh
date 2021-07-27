import { queryClientDefaultConfig } from "@ufh/react-services/src/consts/queryClientDefaultConfig";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { IHandlerDefinitionComponentProps } from "@ufh/react-services/src/types/IHandlerDefinition";
import { LibArchiveSelectedContextProvider } from "../contexts/LibArchiveSelectedContextProvider";
import { LibArchiveEntriesContextProvider } from "../contexts/LibArchiveEntriesContextProvider";
import LibArchiveHandlerPanes from "./LibArchiveHandlerPanes";
import { LibArchiveConfigContextProvider } from "../contexts/LibArchiveConfigContext";

const client = new QueryClient(queryClientDefaultConfig);

const LibArchiveHandlerProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={client}>
    <LibArchiveSelectedContextProvider>
      <LibArchiveEntriesContextProvider>
        {children}
      </LibArchiveEntriesContextProvider>
    </LibArchiveSelectedContextProvider>
  </QueryClientProvider>
);

const LibArchiveHandler: React.FC<IHandlerDefinitionComponentProps> = ({
  config,
}) => (
  <LibArchiveConfigContextProvider config={config}>
    <LibArchiveHandlerProvider>
      <LibArchiveHandlerPanes />
    </LibArchiveHandlerProvider>
  </LibArchiveConfigContextProvider>
);

export default LibArchiveHandler;

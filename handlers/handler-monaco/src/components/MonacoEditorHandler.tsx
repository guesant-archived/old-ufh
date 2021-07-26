import { queryClientDefaultConfig } from "@ufh/react-services/src/consts/queryClientDefaultConfig";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { EditorContextProvider } from "../contexts/EditorContextProvider";
import Editor from "./Editor/Editor";

const client = new QueryClient(queryClientDefaultConfig);

const EditorProviders: React.FC = ({ children }) => (
  <QueryClientProvider client={client}>
    <EditorContextProvider>{children}</EditorContextProvider>
  </QueryClientProvider>
);

const EditorContainer: React.FC = () => (
  <EditorProviders>
    <Editor />
  </EditorProviders>
);

export default EditorContainer;

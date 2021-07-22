import { queryClientDefaultConfig } from "@ufh/react-services/src/consts/queryClientDefaultConfig";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { EditorContextProvider } from "../../contexts/EditorContextProvider";
import Editor from "../Editor/Editor";

const client = new QueryClient(queryClientDefaultConfig);

const EditorContainer = () => (
  <QueryClientProvider client={client}>
    <EditorContextProvider>
      <Editor />
    </EditorContextProvider>
  </QueryClientProvider>
);

export default EditorContainer;

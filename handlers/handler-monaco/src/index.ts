import loadable from "@loadable/component";
import {
  IHandlerDefinition,
  IHandlerDefinitionComponentProps,
} from "@ufh/react-services/src/types/IHandlerDefinition";

const Component = loadable<IHandlerDefinitionComponentProps>(
  () => import("./components/MonacoEditorHandler")
);

const HandlerDefinition: IHandlerDefinition = {
  id: "26f53d03-8db2-4e4d-91f3-ddd58837223e",
  meta: {
    title: "Visualizar como Texto",
    slug: "monaco-editor-handler",
    description: "Visualiza o arquivo selecionado como arquivo de texto.",
  },
  Component: Component,
};

export default HandlerDefinition;

import loadable from "@loadable/component";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";

const Component = loadable(() => import("./components/LibArchiveHandler"));
const ConfigCompoent = loadable(
  () => import("./components/LibArchiveHandlerConfig")
);

const LibArchiveHandlerDefinition: IHandlerDefinition = {
  id: "b345464d-d6e7-46d1-9b56-c99da63c50b0",
  meta: {
    slug: "libarchive-handler",
    title: "Arquivo Compactado",
    description: "Navega e visualiza o conteúdo do arquivo compactado.",
  },
  Component: Component,
  ConfigComponent: ConfigCompoent,
};

export default LibArchiveHandlerDefinition;

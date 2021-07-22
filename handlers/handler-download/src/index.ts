import loadable from "@loadable/component";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";

const DownloadHandlerComponent = loadable(
  () => import("./components/DownloadHandler")
);

const DownloadHandlerDefinition: IHandlerDefinition = {
  id: "adaad825-619f-47c6-aedc-3fb5bbffe4c5",
  meta: {
    title: "Baixar o Arquivo",
    slug: "download-handler",
    description: "Faz o download do arquivo selecionado.",
  },
  Component: DownloadHandlerComponent,
};

export default DownloadHandlerDefinition;

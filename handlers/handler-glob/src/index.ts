import loadable from "@loadable/component";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";

const GlobHandlerComponent = loadable(
  () => import("./components/GlobHandler/GlobHandler")
);

const GlobHandlerDefinition: IHandlerDefinition = {
  Component: GlobHandlerComponent,
  id: "72e9c329-7bca-4144-ae8b-c08072de648d",
  meta: {
    slug: "glob-handler",
    title: "Glob Handler",
    description:
      "Abre outros manipuladores de acordo com o padrão 'glob' do arquivo.",
  },
};

export default GlobHandlerDefinition;

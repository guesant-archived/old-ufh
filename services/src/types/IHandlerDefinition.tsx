import { LoadableComponent } from "@loadable/component";

export type IHandlerDefinitionMeta = {
  slug?: string;
  title?: string;
  description?: string;
};

export type IHandlerDefinitionConfigComponentProps<Config = any> = {
  config: Config;
  onClose: () => void;
  updateConfig: (fn: (draft: Config) => void) => void;
};

export type IHandlerDefinitionComponentProps<Config = any> = {
  config: Config;
};

export type IHandlerDefinition<IConfig = any, Meta = IHandlerDefinitionMeta> = {
  id: string;
  meta?: Meta;
  Component: LoadableComponent<IHandlerDefinitionComponentProps<IConfig>>;
  ConfigComponent?: LoadableComponent<IHandlerDefinitionConfigComponentProps<IConfig>>;
};

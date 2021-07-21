import { LoadableComponent } from "@loadable/component";

export type IHandlerDefinitionMeta = {
  slug?: string;
  title?: string;
  description?: string;
};

export type IHandlerDefinition<Meta = IHandlerDefinitionMeta> = {
  id: string;
  meta?: Meta;
  Component: LoadableComponent<unknown>;
  // Component: ComponentType;
};

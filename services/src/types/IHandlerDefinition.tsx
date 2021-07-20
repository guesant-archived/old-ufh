import { ComponentType } from "react";

export type IHandlerDefinitionMeta = {
  slug: string;
  title: string;
  description: string;
};

export type IHandlerDefinition<Meta = IHandlerDefinitionMeta> = {
  id: string;
  meta?: Meta;
  Component: ComponentType;
};

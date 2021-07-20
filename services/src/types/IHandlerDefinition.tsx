import { ComponentType } from "react";

export type IHandlerDefinition = {
  id: string;
  slug: string;
  Component: ComponentType;
};

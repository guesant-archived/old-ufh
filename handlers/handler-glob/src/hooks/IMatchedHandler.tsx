import { IGlobHandlerEntryConfig } from "@ufh/react-services/src/types/IGlobHandler";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";

export type IMatchedHandler = {
  definition: IHandlerDefinition;
  config: IGlobHandlerEntryConfig;
};

import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import { createContext } from "use-context-selector";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";

type RecipeFunction<T> = (draft: T) => void;

type ISettingsGlobHandlerContext = {
  globHandler: IGlobHandler;
  updateGlobHandler: (recipe: RecipeFunction<IGlobHandler>) => void;

  openedConfigs: IHandlerDefinition["id"][];
  toggleConfig: (id: IHandlerDefinition["id"]) => void;
  isConfigOpened: (id: IHandlerDefinition["id"]) => boolean;
};

export const SettingsGlobHandlerContext = createContext(
  {} as ISettingsGlobHandlerContext
);

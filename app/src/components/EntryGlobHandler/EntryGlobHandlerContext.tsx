import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import { createContext } from "use-context-selector";

export type RecipeFunction<T> = (draft: T) => void;

type IEntryGlobHandlerContext = {
  globHandler: IGlobHandler;
  updateGlobHandler: (recipe: RecipeFunction<IGlobHandler>) => void;
};

export const EntryGlobHandlerContext = createContext(
  {} as IEntryGlobHandlerContext
);

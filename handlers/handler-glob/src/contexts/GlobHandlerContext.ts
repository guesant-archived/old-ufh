import { createContext } from "use-context-selector";
import { ISelectedHandler } from "../hooks/ISelectedHandler";

type IGlobHandlerContext = {
  selectedHandlerDefinition: ISelectedHandler | null;
  setSelectedHandlerDefinition: React.Dispatch<
    React.SetStateAction<ISelectedHandler | null>
  >;

  rememberSelection: boolean;
  toggleRememberSelection: () => void;
  handleSelectHandlerDefinition: (
    selectedHandlerDefinition: ISelectedHandler
  ) => any;
};

export const GlobHandlerContext = createContext({} as IGlobHandlerContext);

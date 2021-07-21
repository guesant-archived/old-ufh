import { createContext } from "use-context-selector";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";

type IGlobHandlerContext = {
  selectedHandlerDefinition: IHandlerDefinition | null;
  setSelectedHandlerDefinition: React.Dispatch<
    React.SetStateAction<IHandlerDefinition | null>
  >;

  rememberSelection: boolean;
  toggleRememberSelection: () => void;
  handleSelectHandlerDefinition: (value: IHandlerDefinition) => any;
};

export const GlobHandlerContext = createContext({} as IGlobHandlerContext);

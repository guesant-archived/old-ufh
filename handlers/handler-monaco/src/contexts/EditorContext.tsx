import { createContext } from "use-context-selector";
import { UseQueryResult } from "react-query";

type IEditorContext = {
  textContentQuery: UseQueryResult<string, unknown>;
};

export const EditorContext = createContext({} as IEditorContext);

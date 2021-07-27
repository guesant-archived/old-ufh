import { createContext } from "use-context-selector";
import React from "react";

type ITreeViewContext = {
  expanded: string[];
  setExpanded: React.Dispatch<React.SetStateAction<string[]>>;
  verifyIsExpanded: (i: string) => boolean;
};

export const TreeViewContext = createContext({} as ITreeViewContext);

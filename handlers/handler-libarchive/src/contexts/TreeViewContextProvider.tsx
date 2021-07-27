import React, { useState, useCallback } from "react";
import { TreeViewContext } from "./TreeViewContext";

export const TreeViewContextProvider: React.FC = ({ children }) => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const verifyIsExpanded = useCallback(
    (i: string) => expanded.includes(i),
    [expanded]
  );

  return (
    <TreeViewContext.Provider
      children={children}
      value={{ expanded, setExpanded, verifyIsExpanded }}
    />
  );
};

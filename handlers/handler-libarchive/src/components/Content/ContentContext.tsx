import { createContext } from "use-context-selector";

import React, { useState, useCallback } from "react";

type IContentContext = {
  isMaximized: boolean;
  setIsMaximized: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMaximized: () => void;
};

export const ContentContext = createContext({} as IContentContext);

export const ContentContextProvider: React.FC = ({ children }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximized = useCallback(
    () => setIsMaximized((value) => !value),
    []
  );

  return (
    <ContentContext.Provider
      children={children}
      value={{ isMaximized, setIsMaximized, toggleMaximized }}
    />
  );
};

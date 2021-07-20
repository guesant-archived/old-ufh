import { OpenedFile } from "@ufh/react-services/src/OpenedFile";
import React, { useState } from "react";
import { HomeContext } from "./HomeContext";

export const HomeContextProvider: React.FC = ({ children }) => {
  const [openedFile, setOpenedFile] = useState<OpenedFile | null>(null);

  return (
    <HomeContext.Provider value={{ openedFile, setOpenedFile }}>
      {children}
    </HomeContext.Provider>
  );
};

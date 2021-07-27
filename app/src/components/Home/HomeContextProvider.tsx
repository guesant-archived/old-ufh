import { AbstractOpenedFile } from "@ufh/react-services/src/AbstractOpenedFile";
import React, { useState } from "react";
import { HomeContext } from "./HomeContext";

export const HomeContextProvider: React.FC = ({ children }) => {
  const [openedFile, setOpenedFile] = useState<AbstractOpenedFile | null>(null);

  return (
    <HomeContext.Provider
      children={children}
      value={{ openedFile, setOpenedFile }}
    />
  );
};

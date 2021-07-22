import loadable from "@loadable/component";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { HomeContext } from "../Home/HomeContext";

const FilesTable = loadable(() => import("../FilesTable"));

export const HomeFilesTable = () => {
  const setOpenedFile = useContextSelector(
    HomeContext,
    ({ setOpenedFile }) => setOpenedFile
  );
  return (
    <div style={{ height: 400, width: "100%" }}>
      <FilesTable onSelectFile={setOpenedFile} />
    </div>
  );
};

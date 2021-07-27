import loadable from "@loadable/component";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { HomeContext } from "./HomeContext";

const FilesTable = loadable(
  () => import("@ufh/react-services/src/components/FilesTable")
);

export const HomeFilesTable = () => {
  const setOpenedFile = useContextSelector(
    HomeContext,
    ({ setOpenedFile }) => setOpenedFile
  );

  const selectedIDS = useContextSelector(
    HomeContext,
    ({ selectedIDS }) => selectedIDS
  );

  const setSelectedIDS = useContextSelector(
    HomeContext,
    ({ setSelectedIDS }) => setSelectedIDS
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <FilesTable
        checkboxSelection
        onSelectFile={setOpenedFile}
        selectionModel={selectedIDS}
        onSelectionModelChange={setSelectedIDS}
      />
    </div>
  );
};

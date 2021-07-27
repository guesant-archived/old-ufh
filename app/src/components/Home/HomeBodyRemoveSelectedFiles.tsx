import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { OpenedFilesContext } from "../../../../services/src/contexts/OpenedFilesContext";
import { HomeContext } from "./HomeContext";

const useRemoveSelectedFiles = () => {
  const selectedIDS = useContextSelector(
    HomeContext,
    ({ selectedIDS }) => selectedIDS
  );
  const removeFiles = useContextSelector(
    OpenedFilesContext,
    ({ removeFiles }) => removeFiles
  );

  const handleRemoveRequest = useCallback(
    () => removeFiles(selectedIDS),
    [removeFiles, selectedIDS]
  );

  return handleRemoveRequest;
};

const HomeBodyRemoveSelectedFiles = () => {
  const handleRemoveRequest = useRemoveSelectedFiles();

  return (
    <Button
      color="default"
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={handleRemoveRequest}
      children="Remover o(s) Arquivo(s) Selecionado(s)"
    />
  );
};

export default HomeBodyRemoveSelectedFiles;

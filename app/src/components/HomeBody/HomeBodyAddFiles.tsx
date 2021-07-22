import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { usePromptOpenFiles } from "@ufh/react-services/src/hooks/usePromptOpenFiles";

const HomeBodyAddFiles = () => {
  const promptOpenFiles = usePromptOpenFiles();
  return (
    <Button
      color="default"
      variant="contained"
      startIcon={<AddIcon />}
      onClick={promptOpenFiles}
      children="Adicionar Arquivo(s)"
    />
  );
};

export default HomeBodyAddFiles;

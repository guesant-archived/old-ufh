import { createStyles, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { OpenedFileContext } from "@ufh/react-services/src/contexts/OpenedFileContext";
import React from "react";
import { useContextSelector } from "use-context-selector";

const useStyles = makeStyles((theme) =>
  createStyles({
    typography: {
      marginBottom: theme.spacing(0.5),
    },
  })
);

const SelectHandlerHeader = () => {
  const styles = useStyles();

  const openedFile = useContextSelector(
    OpenedFileContext,
    ({ openedFile }) => openedFile
  );

  if (!openedFile) return null;

  return (
    <Typography className={styles.typography}>
      Escolha um renderizador para o arquivo "{openedFile.name}":
    </Typography>
  );
};

export default SelectHandlerHeader;

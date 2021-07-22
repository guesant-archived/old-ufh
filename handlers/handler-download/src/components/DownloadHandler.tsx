import React, { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { OpenedFileContext } from "@ufh/react-services/src/contexts/OpenedFileContext";
import { downloadFile } from "../utils/downloadFile";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      padding: theme.spacing(2),
    },
  })
);

const DownloadHandler = () => {
  const styles = useStyles();

  const openedFile = useContextSelector(
    OpenedFileContext,
    ({ openedFile }) => openedFile
  );

  useEffect(() => {
    openedFile && downloadFile(openedFile.file);
  }, [openedFile]);

  return (
    <div className={styles.container}>
      <span>Download iniciado.</span>
    </div>
  );
};

export default DownloadHandler;

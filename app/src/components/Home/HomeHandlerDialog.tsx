import { createStyles, makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { HomeContext } from "./HomeContext";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import GlobHandler from "@ufh/react-handler-glob";
import AppBar from "../AppBar";

const useStyles = makeStyles((theme) =>
  createStyles({
    dialogPaper: {
      height: "100%",
    },
    dialogContent: {
      padding: 0,
    },
  })
);

const HomeHandlerDialog = () => {
  const styles = useStyles();

  const openedFile = useContextSelector(
    HomeContext,
    ({ openedFile }) => openedFile
  );

  const setOpenedFile = useContextSelector(
    HomeContext,
    ({ setOpenedFile }) => setOpenedFile
  );

  const closeDialog = useCallback(() => setOpenedFile(null), []);

  if (openedFile) {
    return (
      <div>
        <Dialog
          fullWidth
          maxWidth="lg"
          onClose={closeDialog}
          open={openedFile !== null}
          classes={{ paper: styles.dialogPaper }}
        >
          <AppBar title={openedFile.name}>
            <IconButton onClick={closeDialog}>
              <CloseIcon />
            </IconButton>
          </AppBar>
          <DialogContent className={styles.dialogContent}>
            <GlobHandler.Component />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return null;
};

export default HomeHandlerDialog;

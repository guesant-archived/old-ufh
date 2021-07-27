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
import AppBar from "@material-ui/core/AppBar";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useOpenedFilesRotate } from "../../hooks/useHomeOpenedFilesRotate";

const useStyles = makeStyles((theme) =>
  createStyles({
    dialogPaper: {
      height: "100%",
      overflow: "hidden",
    },
    dialogContent: {
      padding: 0,
      position: "relative",
    },
    dialogTitle: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      paddingTop: theme.spacing(0),
      paddingRight: theme.spacing(0),
      paddingBottom: theme.spacing(0),
      paddingLeft: theme.spacing(1.75),
    },
    dialogTitleTypography: {
      flex: 1,
      fontSize: "14px",
    },
    titleDivider: {
      marginRight: theme.spacing(0.25),
      marginLeft: theme.spacing(0.25),
    },
    closeBtn: {
      marginTop: theme.spacing(0.25),
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      marginBottom: theme.spacing(0.25),
    },
    btn: {
      marginTop: theme.spacing(0.25),
      marginBottom: theme.spacing(0.25),
    },
  })
);

const RotateButtons = () => {
  const styles = useStyles();
  const { rotate, canRotate } = useOpenedFilesRotate();

  const prev = useCallback(() => rotate(-1), []);
  const next = useCallback(() => rotate(1), []);

  return (
    <>
      <IconButton
        size="medium"
        className={styles.btn}
        color="inherit"
        disabled={!canRotate(-1)}
        onClick={prev}
        children={<NavigateBeforeIcon fontSize="small" />}
      />
      <IconButton
        size="medium"
        color="inherit"
        className={styles.btn}
        disabled={!canRotate(1)}
        onClick={next}
        children={<NavigateNextIcon fontSize="small" />}
      />
    </>
  );
};

const CloseButton = () => {
  const styles = useStyles();

  const setOpenedFile = useContextSelector(
    HomeContext,
    ({ setOpenedFile }) => setOpenedFile
  );

  const closeDialog = useCallback(() => setOpenedFile(null), []);

  return (
    <IconButton
      size="medium"
      color="inherit"
      onClick={closeDialog}
      className={styles.closeBtn}
      children={<CloseIcon fontSize="small" />}
    />
  );
};

const HomeHandlerDialog = () => {
  const styles = useStyles();

  const openedFile = useContextSelector(
    HomeContext,
    ({ openedFile }) => openedFile
  );

  if (!openedFile) return null;

  return (
    <div>
      <Dialog
        fullWidth
        fullScreen
        maxWidth="lg"
        open={openedFile !== null}
        classes={{ paper: styles.dialogPaper }}
      >
        <AppBar color="transparent" position="static" title={openedFile.name}>
          <DialogTitle disableTypography className={styles.dialogTitle}>
            <Typography className={styles.dialogTitleTypography}>
              {openedFile.name}
            </Typography>
            <RotateButtons />
            <Divider orientation="vertical" className={styles.titleDivider} />
            <CloseButton />
          </DialogTitle>
        </AppBar>
        <DialogContent className={styles.dialogContent}>
          <GlobHandler.Component config={{}} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomeHandlerDialog;

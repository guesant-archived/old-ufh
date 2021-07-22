import { createStyles, makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { HomeContext } from "../Home/HomeContext";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import GlobHandler from "@ufh/react-handler-glob";
import AppBar from "@material-ui/core/AppBar";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

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
      paddingTop: theme.spacing(0.5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(0.5),
    },
    dialogTitleTypography: {
      flex: 1,
    },
    titleDivider: {
      marginRight: theme.spacing(0.5),
      marginLeft: theme.spacing(0.5),
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

  const rotate = useContextSelector(HomeContext, ({ rotate }) => rotate);

  const canRotate = useContextSelector(
    HomeContext,
    ({ canRotate }) => canRotate
  );

  const closeDialog = useCallback(() => setOpenedFile(null), []);

  if (openedFile) {
    return (
      <div>
        <Dialog
          fullWidth
          fullScreen
          maxWidth="lg"
          open={openedFile !== null}
          classes={{ paper: styles.dialogPaper }}
        >
          <AppBar position="static" title={openedFile.name}>
            <DialogTitle disableTypography className={styles.dialogTitle}>
              <Typography className={styles.dialogTitleTypography}>
                {openedFile.name}
              </Typography>
              <IconButton
                size="medium"
                disabled={!canRotate(-1)}
                onClick={() => rotate(-1)}
                color="inherit"
              >
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton
                size="medium"
                disabled={!canRotate(1)}
                onClick={() => rotate(1)}
                color="inherit"
              >
                <NavigateNextIcon />
              </IconButton>
              <Divider orientation="vertical" className={styles.titleDivider} />
              <IconButton size="medium" onClick={closeDialog} color="inherit">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
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

import { createStyles, makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_HOME } from "../../routes";
import AppBar from "../AppBar";
import SettingsGlobHandlers from "../SettingsGlobHandlers/SettingsGlobHandlers";

const useStyles = makeStyles((theme) =>
  createStyles({
    dialogPaper: {
      height: "100%",
      overflow: "hidden",
    },
    dialogContent: {
      height: "100%",
      overflow: "hidden",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  })
);

const SettingsHeader = () => (
  <AppBar title="Configurações">
    <Link to={ROUTE_HOME()}>
      <Tooltip title="Voltar à Página Inicial">
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Link>
  </AppBar>
);

const Settings = () => {
  const styles = useStyles();
  return (
    <div>
      <Dialog
        open
        fullWidth
        maxWidth="md"
        classes={{ paper: styles.dialogPaper }}
      >
        <SettingsHeader />
        <DialogContent className={styles.dialogContent}>
          <SettingsGlobHandlers />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Settings;

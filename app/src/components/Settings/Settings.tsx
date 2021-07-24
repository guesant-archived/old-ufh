import { createStyles, makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import SettingsGlobHandlers from "./SettingsGlobHandlers";
import SettingsHeader from "./SettingsHeader";

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

const Settings = () => {
  const styles = useStyles();
  return (
    <div>
      <Dialog open fullWidth maxWidth="md" classes={{ paper: styles.dialogPaper }}>
        <SettingsHeader />
        <DialogContent className={styles.dialogContent}>
          <SettingsGlobHandlers />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Settings;

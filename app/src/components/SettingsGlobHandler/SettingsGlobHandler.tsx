import { createStyles, makeStyles } from "@material-ui/core";
import React, { memo } from "react";
import SettingsGlobHandlerActions from "./SettingsGlobHandlerActions";
import SettingsGlobHandlerPattern from "./SettingsGlobHandlerPattern";
import SettingsGlobHandlerSelectHandlers from "./SettingsGlobHandlerSelectHandlers";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      width: "100%",
      display: "grid",
      alignItems: "center",
      gap: theme.spacing(1),
      gridTemplateColumns: "1fr 1fr auto",
    },
  })
);

const SettingsGlobHandler = memo(() => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <SettingsGlobHandlerPattern />
      <SettingsGlobHandlerSelectHandlers />
      <SettingsGlobHandlerActions />
    </div>
  );
});

export default SettingsGlobHandler;

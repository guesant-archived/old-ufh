import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import GlobHandlerEntryActions from "./EntryGlobHandlerActions";
import GlobHandlerEntryPattern from "./EntryGlobHandlerPattern";
import GlobHandlerEntrySelectHandlers from "./EntryGlobHandlerSelectHandlers";

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

const EntryGlobHandler = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <GlobHandlerEntryPattern />
      <GlobHandlerEntrySelectHandlers />
      <GlobHandlerEntryActions />
    </div>
  );
};

export default EntryGlobHandler;

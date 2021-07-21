import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Loading = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <CircularProgress />
    </div>
  );
};

export default Loading;

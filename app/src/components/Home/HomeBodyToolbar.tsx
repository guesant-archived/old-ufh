import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { useContextSelector } from "use-context-selector";
import HomeBodyAddFiles from "./HomeBodyAddFiles";
import HomeBodyRemoveSelectedFiles from "./HomeBodyRemoveSelectedFiles";
import { HomeContext } from "./HomeContext";

const useToolbarStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    space: {
      flex: 1,
    },
  })
);

export const HomeBodyToolbar = () => {
  const styles = useToolbarStyles();

  const hasSelection = useContextSelector(
    HomeContext,
    ({ selectedIDS }) => selectedIDS.length > 0
  );

  return (
    <div className={styles.container}>
      <div className={styles.space} />
      {!hasSelection && <HomeBodyAddFiles />}
      {hasSelection && <HomeBodyRemoveSelectedFiles />}
    </div>
  );
};

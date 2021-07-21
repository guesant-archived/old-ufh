import loadable from "@loadable/component";
import { createStyles, makeStyles } from "@material-ui/core";
import { OpenedFileContextProvider } from "@ufh/react-services/src/providers/OpenedFileContextProvider";
import React, { memo } from "react";
import { useContextSelector } from "use-context-selector";
import HomeAddFiles from "./HomeBodyAddFiles";
import { HomeContext } from "./HomeContext";
import { HomeFilesTable } from "./HomeBodyFilesTable";

const HomeHandlerDialog = loadable(() => import("./HomeBodyHandlerDialog"));

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      margin: theme.spacing(2),
    },
    homeFilesToolbar: {
      display: "flex",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    homeFilesToolbarSpace: {
      flex: 1,
    },
  })
);

const HomeContent = memo(() => {
  const styles = useStyles();

  const openedFile = useContextSelector(
    HomeContext,
    ({ openedFile }) => openedFile
  );

  return (
    <div className={styles.container}>
      <div className={styles.homeFilesToolbar}>
        <div className={styles.homeFilesToolbarSpace}></div>
        <HomeAddFiles />
      </div>
      <HomeFilesTable />
      {openedFile && (
        <OpenedFileContextProvider openedFile={openedFile}>
          <HomeHandlerDialog key={openedFile.id} />
        </OpenedFileContextProvider>
      )}
    </div>
  );
});

export default HomeContent;
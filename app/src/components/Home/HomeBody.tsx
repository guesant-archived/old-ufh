import loadable from "@loadable/component";
import { createStyles, makeStyles } from "@material-ui/core";
import { OpenedFileContextProvider } from "@ufh/react-services/src/contexts/OpenedFileContextProvider";
import React, { memo } from "react";
import { useContextSelector } from "use-context-selector";
import { HomeContext } from "./HomeContext";
import { HomeFilesTable } from "./HomeBodyFilesTable";
import { HomeBodyToolbar } from "./HomeBodyToolbar";

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

const HomeBody = memo(() => {
  const styles = useStyles();

  const openedFile = useContextSelector(
    HomeContext,
    ({ openedFile }) => openedFile
  );

  return (
    <div className={styles.container}>
      <HomeBodyToolbar />
      <HomeFilesTable />
      {openedFile && (
        <OpenedFileContextProvider openedFile={openedFile}>
          <HomeHandlerDialog />
        </OpenedFileContextProvider>
      )}
    </div>
  );
});

export default HomeBody;

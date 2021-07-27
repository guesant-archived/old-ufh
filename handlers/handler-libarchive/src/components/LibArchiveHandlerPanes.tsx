import React from "react";
import SplitterLayout from "react-splitter-layout";
import { LibArchiveSidebarContextProvider } from "../contexts/LibArchiveSidebarContextProvider";
import { LibArchiveSelectedContext } from "../contexts/LibArchiveSelectedContext";
import Sidebar from "./Sidebar/Sidebar";
import { createStyles, makeStyles } from "@material-ui/core";
import { useContextSelector } from "use-context-selector";
import { OpenedFileContext } from "@ufh/react-services/src/contexts/OpenedFileContext";
import Content from "./Content/Content";
import "react-splitter-layout/lib/index.css";
import { LibArchiveEntriesContext } from "../contexts/LibArchiveEntriesContext";
import { ContentContextProvider } from "./Content/ContentContext";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      height: "100%",
      overflow: "hidden",
      position: "relative",
    },
    errorMessageContainer: {
      padding: theme.spacing(2),
    },
  })
);

const ErrorMessage = () => {
  const styles = useStyles();
  const openedFile = useContextSelector(
    OpenedFileContext,
    ({ openedFile }) => openedFile
  );
  return (
    <div className={styles.errorMessageContainer}>
      <p>
        Não foi possível abrir o arquivo "{openedFile!.name}" como arquivo
        compactado.
      </p>
    </div>
  );
};

const useEntriesQuery = () => {
  const error = useContextSelector(
    LibArchiveEntriesContext,
    ({ entriesQuery: { error } }) => error
  );

  const isLoading = useContextSelector(
    LibArchiveEntriesContext,
    ({ entriesQuery: { isLoading } }) => isLoading
  );

  return { error, isLoading };
};

const LibArchiveHandlerPanes = () => {
  const styles = useStyles();

  const { error, isLoading } = useEntriesQuery();

  if (isLoading) return null;

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <LibArchiveSidebarContextProvider>
      <div className={styles.container}>
        <SplitterLayout
          percentage
          primaryIndex={0}
          primaryMinSize={5}
          secondaryMinSize={5}
          secondaryInitialSize={80}
        >
          <div className={styles.container}>
            <Sidebar />
          </div>
          <div className={styles.container}>
            <ContentContextProvider>
              <Content />
            </ContentContextProvider>
          </div>
        </SplitterLayout>
      </div>
    </LibArchiveSidebarContextProvider>
  );
};

export default LibArchiveHandlerPanes;

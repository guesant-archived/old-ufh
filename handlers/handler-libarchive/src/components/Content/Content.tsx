import { makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import GlobHandler from "@ufh/react-handler-glob";
import Loading from "@ufh/react-services/src/components/Loading";
import { OpenedFileContextProvider } from "@ufh/react-services/src/contexts/OpenedFileContextProvider";
import clsx from "clsx";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { LibArchiveEntriesContext } from "../../contexts/LibArchiveEntriesContext";
import { LibArchiveSelectedContext } from "../../contexts/LibArchiveSelectedContext";
import ContentHeader from "./ContentHeader";
import { ContentContainer } from "./ContentContainer";

const useStyles = makeStyles({
  fullHeight: {
    height: "100%",
    overflow: "hidden",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
});

const useSelectedQuery = () => {
  const isEntriesLoading = useContextSelector(
    LibArchiveEntriesContext,
    ({ entriesQuery: { isLoading } }) => isLoading
  );

  const isSelectedLoading = useContextSelector(
    LibArchiveSelectedContext,
    ({ selectedQuery: { isLoading } }) => isLoading
  );

  const data = useContextSelector(
    LibArchiveSelectedContext,
    ({ selectedQuery: { data } }) => data
  );
  const error = useContextSelector(
    LibArchiveSelectedContext,
    ({ selectedQuery: { error } }) => error
  );

  return { data, error, isLoading: isEntriesLoading || isSelectedLoading };
};

const Content = () => {
  const styles = useStyles();
  const { data: openedFile, error, isLoading } = useSelectedQuery();

  const selected = useContextSelector(
    LibArchiveSelectedContext,
    ({ selected }) => selected
  );

  if (!selected) return null;

  return (
    <ContentContainer>
      <div className={clsx(styles.container, styles.fullHeight)}>
        <ContentHeader />
        <Divider />
        <div className={styles.fullHeight}>
          {isLoading && <Loading />}

          {openedFile && (
            <OpenedFileContextProvider
              key={openedFile.id}
              openedFile={openedFile}
            >
              <GlobHandler.Component config={{}} fallback={<Loading />} />
            </OpenedFileContextProvider>
          )}

          {!isLoading && error && !openedFile && (
            <p>Não foi possível abrir o arquivo "{selected}".</p>
          )}
        </div>
      </div>
    </ContentContainer>
  );
};

export default Content;

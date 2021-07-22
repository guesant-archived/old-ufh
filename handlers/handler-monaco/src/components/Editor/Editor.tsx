import { makeStyles } from "@material-ui/core";
import MonacoEditor from "@monaco-editor/react";
import Loading from "@ufh/react-services/src/components/Loading";
import { OpenedFileContext } from "@ufh/react-services/src/contexts/OpenedFileContext";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { EditorContext } from "../../contexts/EditorContext";

const useStyles = makeStyles({
  container: {
    height: "100%",
    overflow: "hidden",
  },
});

const Editor = () => {
  const styles = useStyles();

  const openedFile = useContextSelector(
    OpenedFileContext,
    ({ openedFile }) => openedFile
  );

  const data = useContextSelector(
    EditorContext,
    ({ textContentQuery: { data } }) => data
  );

  const isLoading = useContextSelector(
    EditorContext,
    ({ textContentQuery: { isLoading } }) => isLoading
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <MonacoEditor
        value={data}
        theme="vs-dark"
        path={openedFile!.name}
        options={{ readOnly: true }}
      />
    </div>
  );
};

export default Editor;

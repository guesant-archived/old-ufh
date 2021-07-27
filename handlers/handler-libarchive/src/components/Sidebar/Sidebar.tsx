import Divider from "@material-ui/core/Divider";
import Loading from "@ufh/react-services/src/components/Loading";
import React from "react";
import SidebarButtons from "./SidebarButtons";
import LibArchiveHandlerTreeView from "../TreeView/TreeView";
import { TreeViewContextProvider } from "../../contexts/TreeViewContextProvider";
import { useSidebarEntriesQuery } from "./useSidebarEntriesQuery";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    flexDirection: "column",
  },
  treeViewContainer: {
    flex: 1,
    overflow: "auto",
  },
});

const Sidebar = () => {
  const { data, isLoading } = useSidebarEntriesQuery();

  const styles = useStyles();
  return (
    <div className={styles.container}>
      <TreeViewContextProvider>
        <SidebarButtons />
        <Divider />
        <div className={styles.treeViewContainer}>
          {isLoading && <Loading />}
          {!isLoading && data && <LibArchiveHandlerTreeView />}
        </div>
      </TreeViewContextProvider>
    </div>
  );
};

export default Sidebar;

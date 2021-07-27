import { createStyles, makeStyles } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import React, { useCallback, useState } from "react";
import { SidebarSearchField } from "./SidebarSearchField";
import { SidebarButtonCollapseExpanded } from "./SidebarButtonCollapseExpanded";
import { SidebarButtonHighlight } from "./SidebarButtonHighlight";

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      overflow: "auto",
      padding: theme.spacing(1),
      display: "flex",
      flexWrap: "wrap",
    },
    searchContainer: {
      padding: theme.spacing(1),
    },
    buttonsContainer: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(0.5),
    },
  })
);

const SidebarButtons = () => {
  const styles = useStyles();

  const [isSearchMode, setIsSearchMode] = useState(false);

  const toggleSearchMode = useCallback(
    () => setIsSearchMode((value) => !value),
    []
  );

  return (
    <>
      <div className={styles.container}>
        <div style={{ flex: 1 }} />
        <div className={styles.buttonsContainer}>
          <ToggleButton
            size="small"
            selected={isSearchMode}
            onChange={toggleSearchMode}
            children={<SearchIcon fontSize="small" />}
          />
          <Divider orientation="vertical" />
          <SidebarButtonHighlight />
          <Divider orientation="vertical" />
          <SidebarButtonCollapseExpanded />
        </div>
      </div>
      <SidebarSearchField isSearchMode={isSearchMode} />
    </>
  );
};

export default SidebarButtons;

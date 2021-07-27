import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useRef } from "react";
import { useContextSelector } from "use-context-selector";
import { LibArchiveSidebarContext } from "../../contexts/LibArchiveSidebarContext";
import { useStyles } from "./SidebarButtons";

export const SidebarSearchField: React.FC<{ isSearchMode: boolean }> = ({
  isSearchMode,
}) => {
  const styles = useStyles();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = searchInputRef.current;
    if (!input) return;
    isSearchMode ? input.focus() : input.blur();
  }, [isSearchMode]);

  const localSearchText = useContextSelector(
    LibArchiveSidebarContext,
    ({ searchText }) => searchText
  );
  const setLocalSearchText = useContextSelector(
    LibArchiveSidebarContext,
    ({ setSearchText }) => setSearchText
  );

  return (
    <Collapse in={isSearchMode}>
      <Divider />
      <div className={styles.searchContainer}>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          style={{ margin: 0 }}
          value={localSearchText}
          inputRef={searchInputRef}
          onFocus={(e) => e.target.select()}
          onChange={(e) => setLocalSearchText(e.target.value)}
        />
      </div>
    </Collapse>
  );
};

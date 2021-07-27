import IconButton from "@material-ui/core/IconButton";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import React, { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { TreeViewContext } from "../../contexts/TreeViewContext";

export const SidebarButtonCollapseExpanded = () => {
  const setExpanded = useContextSelector(
    TreeViewContext,
    ({ setExpanded }) => setExpanded
  );

  const collapse = useCallback(() => setExpanded([]), []);

  return (
    <IconButton size="small" color="inherit" onClick={collapse}>
      <FullscreenExitIcon />
    </IconButton>
  );
};

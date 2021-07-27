import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import React, { useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { TreeViewContext } from "../../contexts/TreeViewContext";

export const TreeItemIconDirectory: React.FC<{ path: string }> = ({ path }) => {
  const verifyIsExpanded = useContextSelector(
    TreeViewContext,
    ({ verifyIsExpanded }) => verifyIsExpanded
  );

  const isDirectoryExpanded = useMemo(
    () => verifyIsExpanded(path),
    [path, verifyIsExpanded]
  );

  if (isDirectoryExpanded) {
    return (
      <>
        <KeyboardArrowDownIcon />
        <FolderOpenIcon />
      </>
    );
  }

  return (
    <>
      <KeyboardArrowRightIcon />
      <FolderIcon />
    </>
  );
};

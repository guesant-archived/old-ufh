import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeView from "@material-ui/lab/TreeView";
import { isdir } from "@ufh/react-services/src/helpers/path/isdir";
import React, { useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { LibArchiveSelectedContext } from "../../contexts/LibArchiveSelectedContext";
import TreeItemContentDirectoryContent from "./TreeItemContentDirectoryContent";
import { TreeViewContext } from "../../contexts/TreeViewContext";

const LibArchiveHandlerTreeView: React.FC = () => {
  const [localSelected, setLocalSelected] = useState("");

  const expanded = useContextSelector(
    TreeViewContext,
    ({ expanded }) => expanded
  );
  const setExpanded = useContextSelector(
    TreeViewContext,
    ({ setExpanded }) => setExpanded
  );

  const selected = useContextSelector(
    LibArchiveSelectedContext,
    ({ selected }) => selected
  );
  const setSelected = useContextSelector(
    LibArchiveSelectedContext,
    ({ setSelected }) => setSelected
  );

  useEffect(() => void setLocalSelected(selected), [selected]);
  useEffect(
    () => void (!isdir(localSelected) && setSelected(localSelected)),
    [localSelected]
  );

  return (
    <div
      style={{ height: "100%", overflow: "auto", paddingBottom: "1rem" }}
      onClick={(e) =>
        void (e.target === e.currentTarget && setLocalSelected(""))
      }
    >
      <TreeView
        expanded={expanded}
        selected={localSelected}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        onNodeToggle={(_, updated) => setExpanded(updated)}
        onNodeSelect={(_: any, updated: string) => setLocalSelected(updated)}
      >
        <TreeItemContentDirectoryContent path="" />
      </TreeView>
    </div>
  );
};

export default LibArchiveHandlerTreeView;

import React, { memo, useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { TreeViewContext } from "../../contexts/TreeViewContext";
import TreeItemContentDirectoryContent from "./TreeItemContentDirectoryContent";

const styles = {
  sronly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0,
  },
} as const;

export const RenderTreeInnerDirectory: React.FC<{ path: string }> = memo(
  ({ path }) => {
    const verifyIsExpanded = useContextSelector(
      TreeViewContext,
      ({ verifyIsExpanded }) => verifyIsExpanded
    );

    const isDirectoryExpanded = useMemo(
      () => verifyIsExpanded(path),
      [path, verifyIsExpanded]
    );

    return !isDirectoryExpanded ? (
      <p
        style={styles.sronly}
        children="Abra o diretório para mostrar o conteúdo"
      />
    ) : (
      <TreeItemContentDirectoryContent path={path} />
    );
  }
);

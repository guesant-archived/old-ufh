import React, { Fragment, memo, useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { LibArchiveSidebarContext } from "../../contexts/LibArchiveSidebarContext";
import TreeItem from "./TreeItem";

export type RenderTreeInnerDirectoryItemsProps = { path: string };

const TreeItemContentDirectoryContent: React.FC<RenderTreeInnerDirectoryItemsProps> =
  memo(({ path }) => {
    const match = useContextSelector(
      LibArchiveSidebarContext,
      ({ match }) => match
    );
    const matchedPaths = useMemo(() => match(path), [match, path]);

    return (
      <>
        {matchedPaths.map((i) => (
          <TreeItem key={i} path={i} />
        ))}
      </>
    );
  });

export default TreeItemContentDirectoryContent;

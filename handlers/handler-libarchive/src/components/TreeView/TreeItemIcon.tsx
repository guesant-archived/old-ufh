import { isdir } from "@ufh/react-services/src/helpers/path/isdir";
import React, { memo, useMemo } from "react";
import { TreeItemIconDirectory } from "./TreeItemIconDirectory";
import { TreeItemIconFile } from "./TreeItemIconFile";

export const TreeItemIcon: React.FC<{
  path: string;
  variant: "directory" | "file";
}> = memo(({ path }) => {
  const isDirectory = useMemo(() => isdir(path), [path]);
  if (isDirectory) return <TreeItemIconDirectory path={path} />;
  return <TreeItemIconFile />;
});

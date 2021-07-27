import { isdir } from "@ufh/react-services/src/helpers/path/isdir";
import React, { memo, useMemo } from "react";
import { RenderTreeInnerDirectory } from "./TreeItemContentDirectory";

export const TreeItemContent: React.FC<{ path: string }> = memo(({ path }) => {
  const isDirectory = useMemo(() => isdir(path), [path]);
  return isDirectory ? <RenderTreeInnerDirectory path={path} /> : null;
});

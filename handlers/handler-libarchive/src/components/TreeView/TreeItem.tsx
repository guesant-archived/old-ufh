import { createStyles, makeStyles } from "@material-ui/core";
import { lighten } from "@material-ui/core/styles";
import MuiTreeItem from "@material-ui/lab/TreeItem";
import { basename } from "@ufh/react-services/src/helpers/path/basename";
import { isdir } from "@ufh/react-services/src/helpers/path/isdir";
import clsx from "clsx";
import React, { memo, useMemo } from "react";
import localStyles from "./TreeItem.module.css";
import { TreeItemIcon } from "./TreeItemIcon";
import { TreeItemContent } from "./TreeItemContent";

const useTreeItemStyles = makeStyles((theme) =>
  createStyles({
    root: {
      ...(theme.palette.type === "dark"
        ? {
            "--hover-bg": lighten(theme.palette.grey[900], 0.2),
            "--selected-bg": lighten(theme.palette.grey[900], 0.1),
            "--selected-border": theme.palette.grey[600],
          }
        : {
            "--hover-bg": lighten(theme.palette.grey[900], 0.9),
            "--selected-bg": lighten(theme.palette.grey[900], 0.875),
            "--selected-border": "transparent",
          }),
    },
  })
);

const getVariant = (isDirectory: boolean) =>
  isDirectory ? "directory" : "file";

const TreeItem: React.FC<{
  path: string;
}> = memo(({ path }) => {
  const label = useMemo(() => basename(path), [path]);
  const isDirectory = useMemo(() => isdir(path), [path]);
  const styles = useTreeItemStyles();
  return (
    <>
      <MuiTreeItem
        key={path}
        title={path}
        nodeId={path}
        label={label}
        icon={
          <TreeItemIcon
            key={path}
            path={path}
            variant={getVariant(isDirectory)}
          />
        }
        classes={{
          label: localStyles.label,
          root: clsx(localStyles.treeItem, styles.root, {
            [localStyles.file]: !isDirectory,
            [localStyles.directory]: isDirectory,
          }),
          content: localStyles.content,
          selected: localStyles.selected,
          iconContainer: localStyles.iconContainer,
        }}
      >
        {isDirectory && <TreeItemContent path={path} />}
      </MuiTreeItem>
    </>
  );
});

export default TreeItem;

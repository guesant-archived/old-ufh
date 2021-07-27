import { createStyles, makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { LibArchiveSelectedContext } from "../../contexts/LibArchiveSelectedContext";
import { useSelectedRotation } from "../../hooks/useSelectedRotation";
import { ContentContext } from "./ContentContext";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

const useHeaderStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      marginLeft: theme.spacing(1.75),
    },
    btnMargins: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
    },
    toolbarTypography: {
      flex: 1,
      fontSize: 14,
    },
  })
);

const ContentHeaderMaximizeBtn = () => {
  const isMaximized = useContextSelector(
    ContentContext,
    ({ isMaximized }) => isMaximized
  );

  const toggleMaximized = useContextSelector(
    ContentContext,
    ({ toggleMaximized }) => toggleMaximized
  );

  return (
    <IconButton
      size="medium"
      color="inherit"
      onClick={toggleMaximized}
      children={
        isMaximized ? (
          <FullscreenExitIcon fontSize="small" />
        ) : (
          <FullscreenIcon fontSize="small" />
        )
      }
    />
  );
};

const ContentHeader = () => {
  const styles = useHeaderStyles();

  const selected = useContextSelector(
    LibArchiveSelectedContext,
    ({ selected }) => selected
  );

  const setSelected = useContextSelector(
    LibArchiveSelectedContext,
    ({ setSelected }) => setSelected
  );

  const { next, prev, canRotate } = useSelectedRotation();

  return (
    <AppBar color="default" position="static">
      <Toolbar disableGutters variant="dense" className={styles.toolbar}>
        <Typography
          noWrap
          title={selected}
          className={styles.toolbarTypography}
          children={<span style={{ cursor: "default" }}>{selected}</span>}
        />

        <div className={styles.btnMargins}>
          <IconButton
            size="medium"
            onClick={prev}
            color="inherit"
            disabled={!canRotate(-1)}
            children={<NavigateBeforeIcon fontSize="small" />}
          />
          <IconButton
            size="medium"
            onClick={next}
            color="inherit"
            disabled={!canRotate(1)}
            children={<NavigateNextIcon fontSize="small" />}
          />
        </div>

        <Divider orientation="vertical" />

        <div className={styles.btnMargins}>
          <ContentHeaderMaximizeBtn />
        </div>

        <Divider orientation="vertical" />

        <div className={styles.btnMargins}>
          <IconButton
            size="medium"
            color="inherit"
            onClick={() => setSelected("")}
            children={<CloseIcon fontSize="small" />}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default ContentHeader;

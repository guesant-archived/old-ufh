import { createStyles, makeStyles } from "@material-ui/core";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    toolbarTitle: {
      flex: 1,
    },
  })
);

const AppBar: React.FC<{ title: string }> = ({ title, children }) => {
  const styles = useStyles();
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography className={styles.toolbarTitle} noWrap>
          {title}
        </Typography>
        {children}
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;

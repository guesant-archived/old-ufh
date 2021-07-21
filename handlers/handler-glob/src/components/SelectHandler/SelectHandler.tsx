import { createStyles, makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { useMatchedHandlersFromGlobHandler } from "../../hooks/useMatchedHandlersFromGlobHandler";
import SelectHandlerHeader from "./SelectHandlerHeader";
import SelectHandlerList from "./SelectHandlerList";
import SelectHandlerRemember from "./SelectHandlerRemember";

const useStyles = makeStyles((theme) =>
  createStyles({
    handlerList: {
      flex: 1,
    },
    container: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
      padding: theme.spacing(3),
    },
  })
);

const SelectHandler = () => {
  const styles = useStyles();
  const matchedHandlers = useMatchedHandlersFromGlobHandler();

  if (matchedHandlers) {
    return (
      <div className={styles.container}>
        <SelectHandlerHeader />
        {matchedHandlers.length > 0 && (
          <>
            <div className={styles.handlerList}>
              <SelectHandlerList />
            </div>
            <SelectHandlerRemember />
          </>
        )}
        {matchedHandlers.length === 0 && (
          <List>
            <Divider />
            <ListItem disabled button>
              <ListItemText primary="Não há manipuladores disponíveis ou associados a este arquivo." />
            </ListItem>
            <Divider />
          </List>
        )}
      </div>
    );
  }
  return null;
};

export default SelectHandler;

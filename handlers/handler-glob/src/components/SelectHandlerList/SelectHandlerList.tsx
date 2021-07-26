import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import React from "react";
import { useMatchedHandlersFromGlobHandler } from "../../hooks/useMatchedHandlersFromGlobHandler";
import SelectHandlerListItem from "./SelectHandlerListItem";

const SelectHandlerList = () => {
  const matchedHandlers = useMatchedHandlersFromGlobHandler();
  return (
    <List>
      {matchedHandlers.map((matchedHandler) => (
        <SelectHandlerListItem
          matchedHandler={matchedHandler}
          key={matchedHandler.definition.id}
        />
      ))}
      <Divider />
    </List>
  );
};

export default SelectHandlerList;

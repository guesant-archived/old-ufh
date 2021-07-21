import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import React, { Fragment } from "react";
import { useContextSelector } from "use-context-selector";
import { GlobHandlerContext } from "../../contexts/GlobHandlerContext";
import { useMatchedHandlersFromGlobHandler } from "../../hooks/useMatchedHandlersFromGlobHandler";

const SelectHandlerList = () => {
  const matchedHandlers = useMatchedHandlersFromGlobHandler();

  const handleSelectHandlerDefinition = useContextSelector(
    GlobHandlerContext,
    ({ handleSelectHandlerDefinition }) => handleSelectHandlerDefinition
  );

  return (
    <List className="tw-w-full">
      {matchedHandlers.map((i) => (
        <Fragment key={i.id}>
          <Divider />
          <ListItem button onClick={() => handleSelectHandlerDefinition(i)}>
            <ListItemText
              secondary={i.meta?.description}
              primary={i.meta?.title ?? i.meta?.slug ?? i.id}
            />
            <ListItemAvatar>
              <ArrowRightIcon />
            </ListItemAvatar>
          </ListItem>
        </Fragment>
      ))}
      <Divider />
    </List>
  );
};

export default SelectHandlerList;

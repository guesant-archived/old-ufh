import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Tooltip from "@material-ui/core/Tooltip";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import React, { Fragment, useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { GlobHandlerContext } from "../../contexts/GlobHandlerContext";
import { IMatchedHandler } from "../../hooks/IMatchedHandler";

const SelectHandlerListItem: React.FC<ISelectHandlerListItem> = ({
  matchedHandler: { definition, config },
}) => {
  const handleSelectHandlerDefinition = useContextSelector(
    GlobHandlerContext,
    ({ handleSelectHandlerDefinition }) => handleSelectHandlerDefinition
  );

  const handleClick = useCallback(() => {
    handleSelectHandlerDefinition({ definition, config });
  }, [definition, config]);

  return (
    <Fragment key={definition.id}>
      <Divider />
      <ListItem button onClick={handleClick}>
        <ListItemText primary={definition.meta?.title ?? definition.meta?.slug ?? definition.id} />
        <Tooltip placement="left" title={definition.meta?.slug ?? ""}>
          <ListItemAvatar>
            <ArrowRightIcon />
          </ListItemAvatar>
        </Tooltip>
      </ListItem>
    </Fragment>
  );
};
type ISelectHandlerListItem = {
  matchedHandler: IMatchedHandler;
};

export default SelectHandlerListItem;

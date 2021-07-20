import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { GlobHandlersContext } from "@ufh/react-services/src/contexts/GlobHandlersContext";
import React from "react";
import { useContextSelector } from "use-context-selector";
import { EntryGlobHandlerContext } from "./EntryGlobHandlerContext";

const GlobHandlerEntryActions = () => {
  const id = useContextSelector(
    EntryGlobHandlerContext,
    ({ globHandler: { _id } }) => _id
  );

  const addGlobHandler = useContextSelector(
    GlobHandlersContext,
    ({ addGlobHandler }) => addGlobHandler
  );
  const removeGlobHandler = useContextSelector(
    GlobHandlersContext,
    ({ removeGlobHandler }) => removeGlobHandler
  );

  return (
    <div>
      <Tooltip title="Remover item">
        <IconButton onClick={() => removeGlobHandler(id)}>
          <RemoveIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Remover item">
        <IconButton onClick={() => addGlobHandler({}, id)}>
          <AddIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default GlobHandlerEntryActions;

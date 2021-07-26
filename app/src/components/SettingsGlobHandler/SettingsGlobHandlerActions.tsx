import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { GlobHandlersContext } from "@ufh/react-services/src/contexts/GlobHandlersContext";
import React, { useCallback, memo } from "react";
import { useContextSelector } from "use-context-selector";
import { SettingsGlobHandlerContext } from "./contexts/SettingsGlobHandlerContext";

const ActionAdd = () => {
  const id = useContextSelector(
    SettingsGlobHandlerContext,
    ({ globHandler: { _id } }) => _id
  );

  const isFilled = useContextSelector(
    SettingsGlobHandlerContext,
    ({ globHandler: { handlers, pattern } }) =>
      pattern.length > 0 || handlers.length > 0
  );

  const addGlobHandler = useContextSelector(
    GlobHandlersContext,
    ({ addGlobHandler }) => addGlobHandler
  );

  const handleAddClick = useCallback(
    () => isFilled && addGlobHandler({}, id),
    [id, addGlobHandler, isFilled]
  );

  return (
    <Tooltip title="Adicionar item">
      <IconButton disabled={!isFilled} onClick={handleAddClick}>
        <AddIcon />
      </IconButton>
    </Tooltip>
  );
};

const ActionRemove = () => {
  const id = useContextSelector(
    SettingsGlobHandlerContext,
    ({ globHandler: { _id } }) => _id
  );

  const isFilled = useContextSelector(
    SettingsGlobHandlerContext,
    ({ globHandler: { handlers, pattern } }) =>
      pattern.length > 0 || handlers.length > 0
  );

  const removeGlobHandler = useContextSelector(
    GlobHandlersContext,
    ({ removeGlobHandler }) => removeGlobHandler
  );

  const handleRemoveClick = useCallback(
    () => removeGlobHandler(id),
    [id, removeGlobHandler]
  );

  return (
    <Tooltip title="Remover item">
      <IconButton disabled={!isFilled} onClick={handleRemoveClick}>
        <RemoveIcon />
      </IconButton>
    </Tooltip>
  );
};

const SettingsGlobHandlerActions = memo(() => (
  <div>
    <ActionRemove />
    <ActionAdd />
  </div>
));

export default SettingsGlobHandlerActions;

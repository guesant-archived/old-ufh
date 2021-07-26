import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import React, { memo, useMemo, useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { SettingsGlobHandlerContext } from "./contexts/SettingsGlobHandlerContext";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";

export const SettingsGlobHandlerSelectHandlersItem: React.FC<{
  def: IHandlerDefinition;
}> = memo(({ def }) => {
  const entryHandlers = useContextSelector(
    SettingsGlobHandlerContext,
    ({ globHandler: { handlers } }) => handlers
  );

  const isChecked = useMemo(
    () => entryHandlers.some(({ id }) => id === def.id),
    [entryHandlers, def]
  );

  const toggleConfig = useContextSelector(
    SettingsGlobHandlerContext,
    ({ toggleConfig }) => toggleConfig
  );

  const handleToggleConfigClick = useCallback(
    () => toggleConfig(def.id),
    [def]
  );

  const handleSecondaryActionClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation(),
    []
  );

  return (
    <>
      <Checkbox checked={isChecked} />
      <ListItemText
        style={{ marginRight: "16px" }}
        primary={def.meta?.slug ?? def.id}
      />
      {def.ConfigComponent && isChecked && (
        <ListItemSecondaryAction onClick={handleSecondaryActionClick}>
          <IconButton onClick={handleToggleConfigClick} edge="end">
            <SettingsIcon />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </>
  );
});

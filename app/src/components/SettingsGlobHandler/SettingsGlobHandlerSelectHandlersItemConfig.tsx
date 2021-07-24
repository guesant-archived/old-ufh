import Dialog from "@material-ui/core/Dialog";
import { IHandlerDefinition } from "@ufh/react-services/src/types/IHandlerDefinition";
import produce from "immer";
import React, { memo, useCallback, useMemo } from "react";
import { useContextSelector } from "use-context-selector";
import { SettingsGlobHandlerContext } from "./contexts/SettingsGlobHandlerContext";

const SettingsGlobHandlerSelectHandlersItemConfig: React.FC<{
  def: IHandlerDefinition;
}> = memo(({ def: { id, ConfigComponent } }) => {
  const isConfigOpened = useContextSelector(
    SettingsGlobHandlerContext,
    ({ isConfigOpened }) => isConfigOpened
  );

  const globHandler = useContextSelector(
    SettingsGlobHandlerContext,
    ({ globHandler }) => globHandler
  );

  const updateGlobHandler = useContextSelector(
    SettingsGlobHandlerContext,
    ({ updateGlobHandler }) => updateGlobHandler
  );

  const config = useMemo(
    () => globHandler.handlers.find(({ id }) => id === id)?.config || {},
    [globHandler, id]
  );

  const updateConfig = useCallback(
    (fn: (draft: any) => void) => {
      updateGlobHandler((draft) => {
        const handler = draft.handlers.find(({ id }) => id === id);
        if (handler) {
          handler.config = produce(handler.config || {}, fn);
        }
      });
    },
    [id]
  );

  const toggleConfig = useContextSelector(
    SettingsGlobHandlerContext,
    ({ toggleConfig }) => toggleConfig
  );

  const onClose = useCallback(() => toggleConfig(id), [toggleConfig, id]);

  if (!ConfigComponent || !isConfigOpened(id)) {
    return null;
  }

  return (
    <Dialog fullWidth maxWidth="sm" open onClose={onClose}>
      {React.createElement(ConfigComponent, {
        key: id,
        config,
        onClose,
        updateConfig,
      })}
    </Dialog>
  );
});

export default SettingsGlobHandlerSelectHandlersItemConfig;

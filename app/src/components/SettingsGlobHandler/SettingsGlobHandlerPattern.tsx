import TextField from "@material-ui/core/TextField";
import React, { useCallback, memo } from "react";
import { useContextSelector } from "use-context-selector";
import { SettingsGlobHandlerContext } from "./contexts/SettingsGlobHandlerContext";

const SettingsGlobHandlerPattern = memo(() => {
  const pattern = useContextSelector(
    SettingsGlobHandlerContext,
    ({ globHandler: { pattern } }) => pattern
  );

  const updateGlobHandler = useContextSelector(
    SettingsGlobHandlerContext,
    ({ updateGlobHandler }) => updateGlobHandler
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      updateGlobHandler((draft) => {
        draft.pattern = e.target.value;
      });
    },
    []
  );

  return (
    <TextField
      margin="dense"
      value={pattern}
      variant="filled"
      color="secondary"
      placeholder="Padrão"
      onChange={handleChange}
      onFocus={(e) => e.target.select()}
    />
  );
});

export default SettingsGlobHandlerPattern;

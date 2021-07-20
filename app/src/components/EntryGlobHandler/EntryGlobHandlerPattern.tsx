import TextField from "@material-ui/core/TextField";
import React, { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { EntryGlobHandlerContext } from "./EntryGlobHandlerContext";

const GlobHandlerEntryPattern = () => {
  const pattern = useContextSelector(
    EntryGlobHandlerContext,
    ({ globHandler: { pattern } }) => pattern
  );

  const updateGlobHandler = useContextSelector(
    EntryGlobHandlerContext,
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
};

export default GlobHandlerEntryPattern;

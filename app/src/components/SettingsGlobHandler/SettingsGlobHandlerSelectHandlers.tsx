import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { HandlersContext } from "@ufh/react-services/src/contexts/HandlersContext";
import React, { memo, useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { SettingsGlobHandlerContext } from "./contexts/SettingsGlobHandlerContext";
import { SettingsGlobHandlerSelectHandlersItem } from "./SettingsGlobHandlerSelectHandlersItem";
import SettingsGlobHandlerSelectHandlersItemConfig from "./SettingsGlobHandlerSelectHandlersItemConfig";

const RenderSelected = (selected: unknown) => (
  <span>{(selected as string[]).join(", ")}</span>
);

const SettingsGlobHandlerSelectHandlers = memo(() => {
  const allAppHandlers = useContextSelector(
    HandlersContext,
    ({ list }) => list
  );

  const entryHandlers = useContextSelector(
    SettingsGlobHandlerContext,
    ({ globHandler: { handlers } }) => handlers
  );

  const updateGlobHandler = useContextSelector(
    SettingsGlobHandlerContext,
    ({ updateGlobHandler }) => updateGlobHandler
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<{ value: string[] }>) => {
      updateGlobHandler((draft) => {
        draft.handlers = (e.target.value as string[]).map(
          (id) =>
            draft.handlers.find(({ id: handlerID }) => id === handlerID) || {
              id,
              config: {},
            }
        );
      });
    },
    []
  );

  return (
    <>
      <FormControl margin="dense" color="secondary" variant="filled">
        <InputLabel>Renderizador</InputLabel>
        <Select
          multiple
          margin="dense"
          renderValue={RenderSelected}
          onChange={handleChange as any}
          inputProps={{ margin: "dense" }}
          value={entryHandlers.map(({ id }) => id)}
        >
          {allAppHandlers.map((def) => (
            <MenuItem value={def.id} key={def.id}>
              <SettingsGlobHandlerSelectHandlersItem def={def} />
            </MenuItem>
          ))}
          {allAppHandlers.length === 0 && (
            <MenuItem value="" disabled>
              <ListItemText primary="Não há manipuladores instalados." />
            </MenuItem>
          )}
        </Select>
      </FormControl>
      {allAppHandlers.map((def) => (
        <SettingsGlobHandlerSelectHandlersItemConfig key={def.id} def={def} />
      ))}
    </>
  );
});

export default SettingsGlobHandlerSelectHandlers;

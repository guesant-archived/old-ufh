import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import React, { useCallback } from "react";
import { useContextSelector } from "use-context-selector";
import { HandlersContext } from "@ufh/react-services/src/contexts/HandlersContext";
import { EntryGlobHandlerContext } from "./EntryGlobHandlerContext";

const RenderSelected = (selected: unknown) => {
  return <span>{(selected as string[]).join(", ")}</span>;
};

const GlobHandlerEntrySelectHandlers = () => {
  const appHandlers = useContextSelector(HandlersContext, ({ list }) => list);

  const entryHandlers = useContextSelector(
    EntryGlobHandlerContext,
    ({ globHandler: { handlers } }) => handlers
  );

  const updateGlobHandler = useContextSelector(
    EntryGlobHandlerContext,
    ({ updateGlobHandler }) => updateGlobHandler
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<{ value: string[] }>) => {
      updateGlobHandler(
        (draft) => void (draft.handlers = e.target.value as string[])
      );
    },
    []
  );

  return (
    <FormControl margin="dense" color="secondary" variant="filled">
      <InputLabel>Renderizador</InputLabel>
      <Select
        multiple
        margin="dense"
        value={entryHandlers}
        onChange={handleChange as any}
        inputProps={{ margin: "dense" }}
        renderValue={RenderSelected}
      >
        {appHandlers.length > 0 &&
          appHandlers.map((def) => (
            <MenuItem value={def.id} key={def.id}>
              <Checkbox checked={entryHandlers.includes(def.id)} />
              <ListItemText primary={def.meta?.slug ?? def.id} />
            </MenuItem>
          ))}
        {appHandlers.length === 0 && (
          <MenuItem value="" disabled>
            <ListItemText primary="Não há manipuladores instalados." />
          </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default GlobHandlerEntrySelectHandlers;

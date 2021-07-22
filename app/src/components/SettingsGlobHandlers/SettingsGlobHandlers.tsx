import Typography from "@material-ui/core/Typography";
import React from "react";
import SettingsGlobHandlersEntries from "../SettingsGlobHandlersEntries/SettingsGlobHandlersEntries";

const SettingsGlobHandlers = () => {
  return (
    <section>
      <Typography variant="h6">Manipuladores de Arquivos</Typography>
      <SettingsGlobHandlersEntries />
    </section>
  );
};

export default SettingsGlobHandlers;

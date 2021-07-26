import Divider from "@material-ui/core/Divider";
import MuiList from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { GlobHandlersContext } from "@ufh/react-services/src/contexts/GlobHandlersContext";
import { SettingsGlobHandlerContextProvider } from "../SettingsGlobHandler/contexts/SettingsGlobHandlerContextProvider";
import React, { memo } from "react";
import { useContextSelector } from "use-context-selector";
import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import SettingsGlobHandler from "../SettingsGlobHandler";

const SettingsGlobHandlersListEntry: React.FC<{ globHandler: IGlobHandler }> =
  memo(({ globHandler }) => (
    <SettingsGlobHandlerContextProvider globHandler={globHandler}>
      <MuiListItem>
        <SettingsGlobHandler />
      </MuiListItem>
      <Divider />
    </SettingsGlobHandlerContextProvider>
  ));

const SettingsGlobHandlersList = () => {
  const globHandlers = useContextSelector(
    GlobHandlersContext,
    ({ list }) => list
  );
  return (
    <div>
      <MuiList>
        <Divider />
        {globHandlers.map((i) => (
          <SettingsGlobHandlersListEntry key={i._id} globHandler={i} />
        ))}
      </MuiList>
    </div>
  );
};

const SettingsGlobHandlers = () => (
  <section>
    <Typography variant="h6">Manipuladores de Arquivos</Typography>
    <SettingsGlobHandlersList />
  </section>
);

export default SettingsGlobHandlers;

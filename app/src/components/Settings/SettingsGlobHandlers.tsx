import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { GlobHandlersContext } from "@ufh/react-services/src/contexts/GlobHandlersContext";
import React, { Fragment } from "react";
import { useContextSelector } from "use-context-selector";
import { IGlobHandler } from "../../../../services/src";
import EntryGlobHandler from "../EntryGlobHandler/EntryGlobHandler";
import { EntryGlobHandlerContextProvider } from "../EntryGlobHandler/EntryGlobHandlerContextProvider";

const SettingsGlobHandlersEntry: React.FC<{ globHandler: IGlobHandler }> = ({
  globHandler,
}) => (
  <Fragment>
    <ListItem>
      <EntryGlobHandlerContextProvider globHandler={globHandler}>
        <EntryGlobHandler />
      </EntryGlobHandlerContextProvider>
    </ListItem>
    <Divider />
  </Fragment>
);

const SettingsGlobHandlersEntries = () => {
  const globHandlers = useContextSelector(
    GlobHandlersContext,
    ({ list }) => list
  );
  return (
    <List>
      <Divider />
      {globHandlers.map((i) => (
        <SettingsGlobHandlersEntry globHandler={i} key={i._id} />
      ))}
    </List>
  );
};

const SettingsGlobHandlers = () => {
  const globHandlers = useContextSelector(
    GlobHandlersContext,
    ({ list }) => list
  );
  return (
    <section>
      <Typography variant="h6">Manipuladores de Arquivos</Typography>
      <SettingsGlobHandlersEntries />
    </section>
  );
};

export default SettingsGlobHandlers;

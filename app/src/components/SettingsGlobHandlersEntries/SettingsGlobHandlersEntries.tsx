import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { GlobHandlersContext } from "@ufh/react-services/src/contexts/GlobHandlersContext";
import React from "react";
import { useContextSelector } from "use-context-selector";
import SettingsGlobHandlersEntry from "../SettingsGlobHandlersEntry/SettingsGlobHandlersEntry";

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

export default SettingsGlobHandlersEntries;

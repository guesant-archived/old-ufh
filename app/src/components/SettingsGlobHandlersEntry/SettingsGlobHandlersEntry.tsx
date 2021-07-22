import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import React, { Fragment } from "react";
import { IGlobHandler } from "@ufh/react-services/src/types/IGlobHandler";
import EntryGlobHandler from "../EntryGlobHandler/EntryGlobHandler";
import { EntryGlobHandlerContextProvider } from "../EntryGlobHandler/EntryGlobHandlerContextProvider";

const SettingsGlobHandlersEntry: React.FC<{
  globHandler: IGlobHandler;
}> = ({ globHandler }) => (
  <Fragment>
    <ListItem>
      <EntryGlobHandlerContextProvider globHandler={globHandler}>
        <EntryGlobHandler />
      </EntryGlobHandlerContextProvider>
    </ListItem>
    <Divider />
  </Fragment>
);

export default SettingsGlobHandlersEntry;

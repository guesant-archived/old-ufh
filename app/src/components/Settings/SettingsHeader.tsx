import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_HOME } from "../../routes";
import AppBar from "../AppBar";

const SettingsHeader = () => (
  <AppBar title="Configurações">
    <Link to={ROUTE_HOME()}>
      <Tooltip title="Voltar à Página Inicial">
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Link>
  </AppBar>
);

export default SettingsHeader;

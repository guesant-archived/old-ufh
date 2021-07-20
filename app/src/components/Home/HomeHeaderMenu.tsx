import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useState, useCallback } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { ROUTE_SETTINGS } from "../../routes";

const Link: React.FC<RouterLinkProps> = ({ ...props }) => (
  <RouterLink {...props} style={{ color: "inherit", textDecoration: "none" }} />
);

const HomeHeaderMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={anchorEl !== null}
      >
        <Link to={ROUTE_SETTINGS()}>
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <Typography variant="inherit" noWrap>
              Configurações
            </Typography>
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default HomeHeaderMenu;

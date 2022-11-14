import React, { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  List,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../../assets/media/logo.svg";
import { routeItems } from "../../RouterConst";
import MenuList from "./MenuList";
import { inject, observer } from "mobx-react";
import StateStore from "../../state/stateStore";
interface ISignupProps {
  StateStore?: StateStore
 
}
const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="appbar--style">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}>
            <img src={logo} />
          </IconButton>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
              width: "100%",
            }}
            justifyContent="end"
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className="bgColor"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              className="bgColor"
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Favorites</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            justifyContent="end"
            className="menu"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <List sx={{ display: "inline-flex"}}>
              {routeItems.map((item: any) => (
                <MenuList path={item.path}  text={item.text}/>
              ))}
            </List>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default inject('StateStore')(observer(Navigation));

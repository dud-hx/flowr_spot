import React, { useState } from "react";
import { Menu as MenuIcon, Preview } from "@mui/icons-material";
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
import { inject, observer } from "mobx-react";
import StateStore from "../../state/stateStore";
import Profile from "../userComponents/Profile";
import profileAvatar from "../../assets/media/profile.svg"
import NavList from "./NavList";
import NavDrawer from "./NavDrawer";
interface INavigationProps {
  StateStore?: StateStore;
  window?: () => Window;
}
const Navigation: React.FC<INavigationProps> = (props) => {
  const { window, StateStore } = props
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openUserProfile, setopenUserProfile] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };
  const handleOpenUserMenu = () => {
    setopenUserProfile((prevState) => !prevState);

  };


  const isLogged = StateStore?.values?.isLogged;
  const filteredArray = !isLogged
    ? routeItems.filter((item) => item.path !== "/favorites")
    : routeItems.filter(item => item.path !== "/login" && item.path !== "/signup");

  const container = window !== undefined ? () => window()!.document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' className="appbar__style">
        <Toolbar  className="toolbar">
          {/* Logo */}
          <IconButton sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}>
            <img src={logo} />
          </IconButton>
          {/* Menu Icon */}
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
         
            onClick={handleDrawerToggle}
            className="bgColor"

          >
            <MenuIcon />
          </IconButton>
          </Box>

          <Box
            justifyContent="end"
            className="menu"
            sx={{ flexGrow: 1, display: { md: "flex" } }}
          >
            <List sx={{ display: "inline-flex" }}>
              {filteredArray.map((item: any) => (
                <NavList path={item.path} text={item.text} handleOpenUserMenu={handleOpenUserMenu} />
              ))}
            </List>
          </Box>
          {isLogged ? (
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profileAvatar} />
              </IconButton>
            </Box>
          ) : null}
          <Profile open={openUserProfile} handleClose={handleOpenUserMenu} />
        </Toolbar>

      </AppBar>
      <NavDrawer container={container} mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        filteredArray={filteredArray} handleOpenUserMenu={handleOpenUserMenu} />
    </Box>
  );
};

export default inject("StateStore")(observer(Navigation));

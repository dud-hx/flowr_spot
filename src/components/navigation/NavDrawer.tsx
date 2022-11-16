import { Drawer, IconButton, List } from "@mui/material";
import { Box } from "@mui/system";
import { inject, observer } from "mobx-react";
import React from "react";
import NavList from "./NavList";
import logo from "../../assets/media/logo.svg";
import { Close } from "@mui/icons-material";

interface INavDrawerProps {
  container: any;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  filteredArray: any;
  handleOpenUserMenu: () => void;
}
const NavDrawer: React.FC<INavDrawerProps> = (props) => {
  const {
    container,
    mobileOpen,
    handleDrawerToggle,
    filteredArray,
    handleOpenUserMenu,
  } = props;
  console.log(container, "teas");

  const drawer = (
    <Box onClick={handleDrawerToggle} justifyContent="end" className="menu">
      <div className="justify_between">
        <IconButton sx={{ display: { xs: "flex" }, mr: 1 }}>
          <img src={logo} alt="logo" />
        </IconButton>
        <IconButton>
          <Close />
        </IconButton>
      </div>
      <List sx={{ display: "block" }}>
        {filteredArray.map((item: any) => (
          <NavList
            path={item.path}
            text={item.text}
            handleOpenUserMenu={handleOpenUserMenu}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        anchor="right"
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className="drawer__nav"
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            maxWidth: "400px",
            sm: { width: "40%" },
            xs: { width: "100%" },
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default inject("StateStore")(observer(NavDrawer));

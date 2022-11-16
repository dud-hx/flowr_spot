import { Button, colors, ListItem, Typography } from "@mui/material";
import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StyledButton from "../../shared/StyledButton";
import StateStore from "../../state/stateStore";
import Login from "../authenticationComponents/Login";
import Signup from "../authenticationComponents/Signup";
export interface IItemsProps {
  path: string;
  text: string;
  StateStore?: StateStore;
  handleOpenUserMenu:() => void
}

const MenuList: React.FC<IItemsProps> = (props) => {
  const { path, text, StateStore,handleOpenUserMenu} = props;

  const val = StateStore?.values;
  const [openSignup, setOpenSignUp] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const isLoginPath = path === "/login" ? "text__color" : "";
  const isSignupPath = path === "/signup";

  const handleSignupClick = () => {
    if (val?.isRegistered) {
      setOpenLogin(true);
    }
    setOpenSignUp((prevState) => !prevState);
  };
  const handleLogin = () => {
    setOpenLogin((nextState) => !nextState);
  };
  const handleProfile = () => {
    handleLogin();
    handleOpenUserMenu()
  };
  const ListElement = () => {
    if (!isSignupPath && !isLoginPath) {
      return (
        <Link to={path}>
          {" "}
          <Typography>{text} </Typography>
        </Link>
      );
    } else {
        return (
          <StyledButton
            text={text}
            onClick={isSignupPath ? handleSignupClick : handleLogin}
            className={isSignupPath ? "button__signup" : ""}
            sx={{ textTransform: "capitalize", color: { isLoginPath } }}
          />
        )
      }
     
  };
  return (
    <>
      <ListItem key={path} sx={{ my: 2, textDecoration: "none" }}>
        <ListElement />
      </ListItem>
      <Signup open={openSignup} handleClose={handleSignupClick} />
      <Login
        open={openLogin}
        handleClose={handleLogin}
        handleProfile={handleProfile}
      />
 
    </>
  );
};

export default inject("StateStore")(observer(MenuList));

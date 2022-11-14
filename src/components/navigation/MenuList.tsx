import { Button, colors, ListItem, Typography } from "@mui/material";
import { inject, observer } from "mobx-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StyledButton from "../../shared/StyledButton";
import StateStore from "../../state/stateStore";
import Login from "../authenticationComponents/Login";
import Signup from "../authenticationComponents/Signup";
export interface IItemsProps{
  path: string;
  text: string;
  StateStore?:StateStore;
}

const MenuList: React.FC<IItemsProps> = props => {
  const { path, text, StateStore } = props;

  
  const [openSignup, setOpenSignUp] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const isLogin = path === "/login" ? "text__color" : "";
  const isSignUp = path === "/signup";
  useEffect(() => {
    if(StateStore?.values.isRegistered){
      setOpenSignUp(false)
      setOpenLogin(true)
    }
      
  }, [StateStore?.values.isRegistered])
  
  const handleSignupClick = () => {
     setOpenSignUp(prevState => !prevState) 
   }
  const handleLogin = () => {
     setOpenLogin(nextState => !nextState);
  }
  const ListElement = () => {
    if (!isSignUp && !isLogin) {
      return <Link to={path}>  <Typography>{text}  </Typography></Link>

    } else {
      return <StyledButton
        text={text}
        onClick={isSignUp ? handleSignupClick : handleLogin}
        className={isSignUp ? "button__signup" : ''}
        sx={{ textTransform: 'capitalize', color: { isLogin } }} />
    }

  }
  return (
    <>
      <ListItem key={path} sx={{ my: 2, textDecoration: "none" }}>
        <ListElement />

      </ListItem>
      <Signup open={openSignup} handleClose={handleSignupClick} />
      <Login open={openLogin} handleClose={handleLogin} />
    </>
  );
};

export default inject('StateStore')(observer(MenuList));

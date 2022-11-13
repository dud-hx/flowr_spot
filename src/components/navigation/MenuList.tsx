import { Button, colors, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ModalComponent from "../../shared/ModalComponent";
import StyledButton from "../../shared/StyledButton";
import Login from "../authenticationComponents/Login";
import Signup from "../authenticationComponents/Signup";
export interface Items {
  path: string;
  text: string;
}

const MenuList = ({ path, text }: Items) => {
  const [openSignup, setOpenSignUp] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);

  const isLogin = path === "/login" ? "text__color" : "";
  const isSignUp = path === "/signup";
  const handleOnClick = () => {
    isSignUp ? setOpenSignUp(prevState => !prevState) :
    setOpenLogin(nextState => !nextState);
  }
  const ListElement = () => {
    if (!isSignUp && !isLogin) {
      return <Link to={path}>  <Typography>{text}  </Typography></Link>

    } else {
      return <StyledButton
        text={text}
        onClick={handleOnClick}
        className={isSignUp ? "button__signup" : ''}
        sx={{ textTransform: 'capitalize', color: { isLogin } }} />
    }

  }
  return (
    <>
      <ListItem key={path} sx={{ my: 2, textDecoration: "none" }}>
        <ListElement />

      </ListItem>
      <Signup open={openSignup} handleClose={handleOnClick} />
      <Login open={openLogin} handleClose={handleOnClick} />
    </>
  );
};

export default MenuList;

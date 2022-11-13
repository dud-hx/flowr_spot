import { ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "../../shared/StyledButton";
export interface Items {
  path: string;
  text: string;
}

const MenuList = ({ path, text }: Items) => {
  const colorLogin = path === "/login" ? "text__color" : "";
  const isSignUp = path === "/signup";
  console.log(isSignUp);
  return (
    <ListItem key={path} sx={{ my: 2, textDecoration: "none" }}>
      {!isSignUp ? (

        <Link to={path}>  <Typography className={colorLogin} >{text}  </Typography></Link>

      ) : (
        <StyledButton
          text={text}
          onClick={() => console.log("signedup")}
          className="button__signup"
        />
      )}
    </ListItem>
  );
};

export default MenuList;

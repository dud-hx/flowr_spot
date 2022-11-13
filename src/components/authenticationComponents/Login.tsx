import { Grid, Modal } from "@mui/material";
import React from "react";
import InputField from "../../shared/InputField";
import ModalComponent from "../../shared/ModalComponent";
import StyledButton from "../../shared/StyledButton";

const Login = (props: any) => {
  const handleChange = () => {
    console.log("handleChange");
  };
  const handleOnClick = () => {
    console.log("handleOnClick");
  };
  return (
    <ModalComponent
      open={props.open}
      handleClose={props.handleClose}
      title="Welcome Back"
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <InputField
            label="Email"
            type="text"
            value="inat@emmail"
            handleChange={handleChange}
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            label="Password"
            type="password"
            value="1996"
            handleChange={handleChange}
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}  >
          <StyledButton
            text="Login to your account"
            buttonVariant="lotus"
            onClick={handleOnClick}
            fullWidth
           />
        </Grid>
      </Grid>
    </ModalComponent>
  );
};

export default Login;

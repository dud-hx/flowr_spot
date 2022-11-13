import { Grid, TextField, Typography } from "@mui/material";
import React from "react";
import InputField from "../../shared/InputField";
import ModalComponent, { modalProps } from "../../shared/ModalComponent";
const register = {
  email: "string",
  password: "string",
  first_name: "string",
  last_name: "string",
  date_of_birth: "string",
};

const Signup = (props: any) => {
  const handleChange = () => {
    console.log("handleChange");
  };
  return (
    <ModalComponent title='Create an Account' open={props.open} handleClose={props.handleClose}>

      <Grid container>
        <Grid item xs={6}>
          <InputField
            label="First Name"
            type="text"
            value="Ina"
            handleChange={handleChange}
          /> </Grid>
        <Grid item xs={6}>

          <InputField
            label="Last Name"
            type="text"
            value="Hoxhaj"
            handleChange={handleChange}

          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            label="Date of birth"
            type="date"
            value="24/08/1996"
            handleChange={handleChange}
            fullWidth={true}
          />
        </Grid>
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
      </Grid>
    </ModalComponent>
  );
};

export default Signup;

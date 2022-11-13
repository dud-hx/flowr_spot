import { Grid, Modal } from '@mui/material'
import React from 'react'
import InputField from '../../shared/InputField'
import ModalComponent from '../../shared/ModalComponent';

const Login = (props:any) => {
  const handleChange = () => {
    console.log("handleChange");
  };
  return (
    <ModalComponent open={props.open} handleClose={props.handleClose} title="Login">

    <Grid container>
  
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
  )
}

export default Login
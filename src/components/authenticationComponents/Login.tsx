import { Alert, Grid } from "@mui/material";
import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import InputField from "../../shared/InputField";
import ModalComponent from "../../shared/ModalComponent";
import StyledButton from "../../shared/StyledButton";
import StateStore, { login } from "../../state/stateStore";
interface ILoginProps {
  StateStore?: StateStore
  open?: boolean,
  handleClose?: () => void
  handleProfile?: () => void
}

const Login: React.FC<ILoginProps> = props => {
  const { StateStore, open, handleClose, handleProfile } = props
  const [user, setUser] = useState<login>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user!,
      [e.target.id]: e.target.value
    })

  };
  const handleOnClick = (e: any) => {
    StateStore?.setLogin(user!)
  };
  const modalOpen = open ? open : false
  const isLogged = StateStore?.values.isLogged;
  return (
    <ModalComponent
      open={modalOpen}
      handleClose={props?.handleClose!}
      title="Welcome Back"
    >
      <Grid container spacing={1}>
        {!isLogged
          ?
          <>
            <Grid item xs={12}>
              <InputField
                label="Email"
                type="text"
                value={user?.email!}
                handleChange={handleChange}
                 id="email"
                 width="49ch"
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                id="password"
                label="Password"
                type="password"
                value={user?.password!}
                handleChange={handleChange} 
                width="49ch"
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
          </>
          :
          <>
            <Grid item xs={12} >
              <Alert variant="outlined" severity="success">
                Congrats! You are successfully logged
              </Alert>{" "}
            </Grid>
            <Grid item xs={12} textAlign="center" mt={2} >
              <StyledButton
                width="25ch"
                text="OK"
                buttonVariant="lotus"
                onClick={handleClose}
                sx={{ marginRight: '10px' }}
              />
              <StyledButton
                width="25ch"
                text="Profile"
                buttonVariant="lotus"
                onClick={handleProfile}
                sx={{ marginLeft: '10px' }}

              />
            </Grid>

          </>

        }
      </Grid>
    </ModalComponent>
  );
};
export default inject("StateStore")(observer(Login));


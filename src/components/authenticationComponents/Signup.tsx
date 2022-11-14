import { Alert, Grid } from "@mui/material";
import { useState } from "react";
import InputField from "../../shared/InputField";
import ModalComponent from "../../shared/ModalComponent";
import StyledButton from "../../shared/StyledButton";
import StateStore from "../../state/stateStore";
import { user } from "../../models/userModel";
import { AnyAaaaRecord } from "dns";
import { inject, observer } from "mobx-react";
import { ContactSupport } from "@mui/icons-material";
interface ISignupProps {
  StateStore?: StateStore;
  open?: boolean;
  handleClose?: () => void;
}

const Signup: React.FC<ISignupProps> = (props) => {
  const { StateStore, open, handleClose } = props;
  const [userAccount, setUserAccount] = useState<user>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAccount({
      ...userAccount!,
      [e.target.id]: e.target.value,
    });
  };
  const handleOnClick = (e: any) => {
    StateStore?.setNewAccount(userAccount!);
  };

  const modalOpen = open ? open : false;
  const isRegistered = StateStore?.values.isRegistered;
  return (
    <ModalComponent
      title={isRegistered ? "" : "Create an Account"}
      open={modalOpen}
      handleClose={handleClose!}
    >
      <Grid container justifyContent="center" alignItems="center">
        {" "}
        {!isRegistered ? (
          <>
            <Grid item xs={6}>
              <InputField
                label="First Name"
                type="text"
                value={userAccount?.first_name!}
                handleChange={handleChange}
                id="first_name"
              />{" "}
            </Grid>
            <Grid item xs={6}>
              <InputField
                label="Last Name"
                type="text"
                value={userAccount?.last_name!}
                handleChange={handleChange}
                id="last_name"
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Date of birth"
                type="date"
                value={userAccount?.date_of_birth!}
                handleChange={handleChange}
                fullWidth={true}
                id="date_of_birth"
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Email"
                type="text"
                value={userAccount?.email!}
                handleChange={handleChange}
                fullWidth={true}
                id="email"
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Password"
                type="password"
                value={userAccount?.password!}
                handleChange={handleChange}
                fullWidth={true}
                id="password"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton
                text="Create an account"
                buttonVariant="lotus"
                onClick={handleOnClick}
                fullWidth
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} >
              <Alert variant="outlined" severity="success">
                Congrats! You are successfully registered
              </Alert>{" "}
            </Grid>
            <Grid item xs={12} textAlign="center" mt={2}>
              <StyledButton
                width="25ch"
                text="OK"
                buttonVariant="lotus"
                onClick={handleClose}
              />
            </Grid>
          </>
        )}{" "}
      </Grid>
    </ModalComponent>
  );
};

export default inject("StateStore")(observer(Signup));

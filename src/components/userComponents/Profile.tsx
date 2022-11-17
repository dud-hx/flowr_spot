import { Avatar, Box, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ModalComponent from "../../shared/ModalComponent";
import StateStore from "../../state/stateStore";
import profileAvatar from "../../assets/media/profile.svg";
import { inject, observer } from "mobx-react";
import StyledButton from "../../shared/StyledButton";

interface IProfileProps {
  StateStore?: StateStore;
  open?: boolean;
  handleClose: () => void;
}

const Profile: React.FC<IProfileProps> = (props) => {
  const { open, handleClose, StateStore } = props;
  const modalOpen = open ? open : false;
  useEffect(() => {
    if (open) {
      StateStore?.setProfile();
    }
  }, [open]);
  const handleOnClick = () => {
    StateStore?.setLogOut();
    handleClose()
  }
  return (
    <ModalComponent open={modalOpen} handleClose={handleClose} title="">
      <Box sx={{ paddingLeft: "90px" }}>
        <div className="profile__box" >
          <Avatar
            alt="Remy Sarp"
            src={profileAvatar}
            sx={{ width: 80, height: 80 }}
          />
          <div style={{ width: "100%", marginLeft: "30px" }}>
            <Typography style={{ fontFamily: 'ubuntu', fontSize: '300' }}>Michael Burry</Typography>
            <Typography variant="caption">41 sightings</Typography>
          </div>
        </div>

        <div className="profile_info">
          <TextField
            fullWidth
            id="first_name"
            label="First name"
            defaultValue="Michale"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            sx={{
              marginBottom: "20px",
            }}
          />
          <TextField
            fullWidth
            id="last_name"
            label="last name"
            defaultValue="Burry"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            sx={{
              marginBottom: "20px",
            }}
          />
          <TextField
            fullWidth
            id="date_of_birth"
            label="Date of Birth"
            defaultValue="24/08/1997"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            sx={{
              marginBottom: "20px",
            }}
          />
          <TextField
            fullWidth
            id="email"
            label="Email Address"
            defaultValue="test@test.com"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
            sx={{
              marginBottom: "20px",
            }}
          />

        </div>
        <div className="justify_center">
          <StyledButton
            text="Logout"
            buttonVariant="lotus"
            onClick={handleOnClick}
            sx={{padding:'15px 50px'}}
          /> </div>
      </Box>
    </ModalComponent>
  );
};

export default inject("StateStore")(observer(Profile));

import React from "react";
import "./styles.css";
import { Box, Grid2 as Grid, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../store/UserSlice";
import { openModal } from "../store/ModalSlice";
import { User } from "../common/interface";

export const Header = () => {
  const user: User = useSelector((state: any) => state.users.user);

  const dispatch = useDispatch();
  const login = async () => {
    dispatch(
      openModal({
        type: "login"
      })
    );
  };
  const signout = async () => {
    dispatch(
      updateUser({
        user: {
          email: "",
          password: "",
          name: ""
        }
      })
    );
  };
  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={3} className="welcome-user-section">
          {!user.isLoggedIn ? "Guest" : `Hi, ${user.name}`}
        </Grid>
        <Grid size={7}></Grid>
        <Grid size={2}>
          {!user.isLoggedIn ? (
            <Button
              className="login-signout-btn"
              type="button"
              onClick={async () => {
                await login();
              }}>
              Login
            </Button>
          ) : (
            <Button
              className="login-signout-btn"
              type="button"
              onClick={async () => {
                await signout();
              }}>
              Sign Out
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

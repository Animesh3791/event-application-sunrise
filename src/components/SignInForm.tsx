import React, { useEffect, useState } from "react";
import "./styles.css";
import { Box, Grid2 as Grid, Button, TextField } from "@mui/material";
import { loginService } from "../services/crud";
import { useDispatch, UseDispatch } from "react-redux";
import { updateUser } from "../store/UserSlice";
import { closeModal } from "../store/ModalSlice";
export const SignInForm = () => {
  const [userCred, setUserCred] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const login = async () => {
    const response = await loginService(userCred.email, userCred.password);
    if (!response.success) {
      setErrorMessage(response.message);
    } else {
      dispatch(
        updateUser({
          user: {
            email: response.user.email,
            password: response.user.password,
            name: response.user.name
          }
        })
      );
      dispatch(closeModal());
      setErrorMessage("");
    }
  };

  return (
    <Box className=" login-form" sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} className="border">
        <Grid size={12} className="border">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="login-form-inputs"
            onChange={(e) => {
              setUserCred({
                ...userCred,
                email: e.target.value
              });
            }}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={"password"}
            className="login-form-inputs"
            onChange={(e) => {
              setUserCred({
                ...userCred,
                password: e.target.value
              });
            }}
          />
        </Grid>

        <Grid size={12}>
          <Button
            variant="contained"
            className="login-form-inputs login-form-input-btn "
            onClick={() => {
              login();
            }}>
            Login
          </Button>
        </Grid>
        {errorMessage.length ? (
          <Grid size={12} className="error-response-message">
            <div>{errorMessage}</div>
          </Grid>
        ) : (
          <></>
        )}
      </Grid>
    </Box>
  );
};

import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Icon,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./input";
import { GoogleLogin } from "react-google-login";
import Icn from "./icon";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const Auth = () => {
  const classes = useStyles();
  const [isSignup, setisSignup] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [formData, setformData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData), history);
    } else {
      dispatch(signin(formData), history);
    }
  };
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () =>
    setshowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setisSignup((prev) => !prev);
    handleShowPassword(false);
  };

  const googleFalure = () => {
    console.log("Google Sign In was unsuccessful");
  };
  const googleSucess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                  xs={6}
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                  xs={6}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
              xs={6}
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              xs={6}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                lable="Reapeat Password"
                handleChange={handleChange}
                type="password"
              ></Input>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="constained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="230901672313-1iet3pcobo3lae167qnp7k5div55eibk.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disable={renderProps.disabled}
                startIcon={<Icn />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSucess}
            onFailure={googleFalure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

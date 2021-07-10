import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "./style";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import moments from "../../images/moments.png";

export const NavBar = () => {
  const classes = useStyles();

  const [user, setuser] = useState(JSON.parse);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Moments
        </Typography>
        <img
          className={classes.image}
          src={moments}
          alt="moments"
          height="60"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.imageUrl}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" color="primary">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

import React from "react";
import { Link } from "react-router-dom";
// css-in-js
import { makeStyles, Theme } from "@material-ui/core";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.jettBlack[100],
    color: theme.jettBlack[500],
    height: "4rem",
    justifyContent: "space-between",
    padding: "0 8rem",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar className={classes.root}>
        <Link to="/">
          <img src="./static/logo.PNG" width="80" height="25" alt="logo" />
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

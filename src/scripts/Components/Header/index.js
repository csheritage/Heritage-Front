import React from "react";
import { Link } from "react-router-dom";
// css-in-js
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#45433e",
    color: "#fff8e7",
    borderBottom: `0.1rem solid #666`,
    height: "4rem",
    justifyContent: "space-between",
    padding: "0 8rem",
  },
});

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

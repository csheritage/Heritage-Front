import React from "react";
import { Link } from "react-router-dom";
// css-in-js
import { makeStyles, useTheme } from "@material-ui/styles";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles({
  root: ({ jettBlack }) => ({
    backgroundColor: jettBlack[100],
    color: jettBlack[500],
    height: "4rem",
    justifyContent: "space-between",
    padding: "0 8rem",
  }),
});

function Header() {
  const { jettBlack } = useTheme();
  const classes = useStyles({ jettBlack });

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

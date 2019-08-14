import React from "react";
// css-in-js
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    height: "80vh",
    color: "#000",
  },
});

function NoMatch() {
  const classes = useStyles();
  return <div className={classes.root}>404 페이지 낫 파운드!</div>;
}

export default NoMatch;

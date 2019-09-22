import React from "react";
// css-in-js
import { makeStyles, Theme } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "80vh",
    color: theme.jettBlack[500],
  },
}));

function NoMatch() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      404 페이지 낫 파운드!
    </Grid>
  );
}

export default NoMatch;

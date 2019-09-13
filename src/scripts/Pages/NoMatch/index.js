import React from "react";
// css-in-js
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: ({ jettBlack }) => ({
    height: "80vh",
    color: jettBlack[500],
  }),
});

function NoMatch() {
  const { jettBlack } = useTheme();
  const classes = useStyles({ jettBlack });

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      404 페이지 낫 파운드!
    </Grid>
  );
}

export default NoMatch;

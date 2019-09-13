import React from "react";
// css-in-js
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: ({ jettBlack }) => ({
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    backgroundColor: jettBlack[100],
    height: "4rem",
  }),
  copyright: ({ jettBlack }) => ({
    color: jettBlack[500],
  }),
  gridRoot: {
    height: "100%",
  },
});

const footerMsg = `무단 배포를 엄금합니다.`;

function Footer() {
  const { jettBlack } = useTheme();
  const classes = useStyles({ jettBlack });

  return (
    <footer className={classes.root} id="footer">
      <Grid container justify="center" alignItems="center" className={classes.gridRoot}>
        <div className={classes.copyright}>{footerMsg}</div>
      </Grid>
    </footer>
  );
}

export default Footer;

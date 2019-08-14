import React from "react";
// css-in-js
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    fontFamily: "'Apple SD Gothic Neo', sans-serif",
    backgroundColor: "#45433e",
    height: "4rem",
    borderTop: `0.1rem solid #999`,
  },
  fakeFontLoader: {
    fontFamily: "'Nanum Barun Gothic'",
  },
  copyright: {
    color: "#fff8e7",
  },
  gridRoot: {
    height: "100%",
  },
});

const footerMsg = `무단 배포를 엄금합니다.`;

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root} id="footer">
      <Grid container justify="center" alignItems="center" className={classes.gridRoot}>
        <div className={classes.copyright}>{footerMsg}</div>
      </Grid>
    </footer>
  );
}

export default Footer;

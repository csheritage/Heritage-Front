import React from "react";
// CSS-In-JS
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    backgroundColor: theme.jettBlack[300],
    color: theme.jettBlack[100],
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: ".8rem",
  },
  notification: {
    textAlign: "left",
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={classes.text}>공지사항</span>
      <span className={classes.text}>이 글은 어떠한 책임도 져주지 않습니다.</span>
      <span className={classes.text}>이 글은 위험성을 가지고 있습니다.</span>
      <span className={classes.text}>이 글을 공유시 끔찍한 일이 벌어질 수 있습니다.</span>
    </div>
  );
}

export default Main;

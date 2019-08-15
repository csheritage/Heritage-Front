import React from "react";
// css-in-js
import { makeStyles } from "@material-ui/styles";
// custom-component

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    backgroundColor: "#000",
    color: "red",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
    fontWiehgt: "Bold",
    fontSize: "3rem",
    marginBottom: ".8rem",
  },
});

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.text}>이 글은 공유가 금지되어 있습니다.</span>
      <span className={classes.text}>이 글은 어떠한 책임도 져주지 않습니다.</span>
      <span className={classes.text}>이 글은 위험성을 가지고 있습니다.</span>
      <span className={classes.text}>이 글을 공유시 끔찍한 일이 벌어질 수 있습니다.</span>
    </div>
  );
}

export default Main;

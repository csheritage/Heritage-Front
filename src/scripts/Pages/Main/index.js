import React from "react";
// css-in-js
import { makeStyles, useTheme } from "@material-ui/styles";
// custom-component

const useStyles = makeStyles({
  root: ({ jettBlack }) => ({
    width: "100%",
    height: "100vh",
    display: "flex",
    backgroundColor: jettBlack[300],
    color: jettBlack[100],
    justifyContent: "center",
    flexDirection: "column",
  }),
  text: {
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: ".8rem",
  },
  notification: {
    textAlign: "left",
    fontWeight: "Bold",
  },
});

function Main() {
  const { jettBlack } = useTheme();
  const classes = useStyles({ jettBlack });

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

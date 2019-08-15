import React from "react";
// css-in-js
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  cardWrapper: {
    fontSize: "1rem",
    height: "4.08rem",
    color: "#fff8e7",
    padding: "1rem",
  },
});

function ExamCardList({ question }) {
  const classes = useStyles();
  return <div className={classes.cardWrapper}>{`- ${question}`}</div>;
}

export default ExamCardList;

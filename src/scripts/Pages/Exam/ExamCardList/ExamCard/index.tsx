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

interface ExamCardListProps {
  question: any;
}
const ExamCardList: React.FC<ExamCardListProps> = ({ question }) => {
  const classes = useStyles();
  return <div className={classes.cardWrapper}>{`- ${question}`}</div>;
};

export default ExamCardList;

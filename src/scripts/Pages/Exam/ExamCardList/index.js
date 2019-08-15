import React from "react";
import { withRouter } from "react-router";

// css-in-js
import { makeStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";
// custom-components
import ExamCard from "./ExamCard";

const useStyles = makeStyles({
  content: {
    height: "3rem",
    color: "#fff8e7",
  },
  cardWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#99958b",
  },
  title: {
    fontSize: "2rem",
    borderBottom: ".1rem solid #45433e",
    padding: "1rem",
    color: "#45433e",
  },
  wrapper: {
    width: "100%",
  },
});

function ExamCardList({ match }) {
  const classes = useStyles();
  const [questions, setQuestions] = React.useState(["loading"]);

  React.useEffect(() => {
    setQuestions(["loading"]);
    const url = `https://the-heritage.herokuapp.com/exam/${match.params.class}`;

    const init = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };

    fetch(url, init).then(res => {
      res.json().then(jsonData => {
        const arr = jsonData.questions.map(question => {
          return {
            id: question._id,
            ask: question.question,
          };
        });
        setQuestions([...arr]);
      });
    });
  }, [match]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>EXAM</div>

      <div className={classes.cardWrapper}>
        {questions.map(question =>
          question === "loading" ? (
            <LinearProgress key={question} />
          ) : (
            <ExamCard question={question.ask} key={question.id} />
          )
        )}
      </div>
    </div>
  );
}

export default withRouter(ExamCardList);

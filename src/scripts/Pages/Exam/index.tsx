import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
// css-in-js
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { FetchInitType } from "@type/FetchInit";

const useStyles = makeStyles({
  content: {
    height: "3rem",
    color: "#fff8e7",
  },
  cardWrapper: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#99958b",
    paddingTop: "10rem",
  },
  link: {
    textDecoration: "none",
    fontSize: "2rem",
    color: "#fff8e7",
  },
  button: {
    border: "1px solid #99958b",
    color: "#fff8e7",
  },
});

const Exam: React.FC<RouteComponentProps> = ({ match }) => {
  const classes = useStyles();
  const [classArr, setClassArr] = React.useState(["loading"]);

  React.useEffect(() => {
    setClassArr(["loading"]);
    const url = `https://the-heritage.herokuapp.com/exam`;

    const init: FetchInitType = {
      method: "GET",
      mode: "cors",
    };

    fetch(url, init).then(res => {
      res.json().then(jsonData => {
        setClassArr([...jsonData.categories]);
      });
    });
  }, [match]);

  return (
    <div className={classes.cardWrapper}>
      {classArr.map(category => (
        <Link to={`/exam/${category}`} className={classes.link} key={category}>
          <Button className={classes.button}>{category}</Button>
        </Link>
      ))}
    </div>
  );
};

export default withRouter(Exam);

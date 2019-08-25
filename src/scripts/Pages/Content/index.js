import React from "react";
import { withRouter, Redirect } from "react-router";
// css-in-js
import { makeStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";
// custom-components
import ContentCard from "./ContentCard";
import handleFetchError from "../../../util/handleFetchError";

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
});

function filteredByCompany(data) {
  const result = data.reduce(function(bef, cur) {
    bef[cur.company] = bef[cur.company] || [];
    bef[cur.company].push(cur);
    return bef;
  }, Object.create(null));

  return result;
}

function Content({ match }) {
  const classes = useStyles();
  const [splitedData, setSplitedData] = React.useState({ loading: "loading" });
  const [updated, setUpdated] = React.useState(0);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setSplitedData({ loading: "loading" });
    const url = `https://the-heritage.herokuapp.com/${match.params.class}`;

    const init = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };

    fetch(url, init)
      .then(handleFetchError)
      .then(res => {
        res.json().then(jsonData => {
          setSplitedData(filteredByCompany(jsonData.questions));
        });
      })
      .catch(error => {
        setError(true);
      });
  }, [match, updated]);

  return (
    <div className={classes.cardWrapper}>
      {error && <Redirect push to="404" />}
      {Object.keys(splitedData).map(data =>
        data === "loading" ? (
          <LinearProgress key={data} />
        ) : (
          <ContentCard
            data={splitedData[data]}
            key={data}
            setUpdated={setUpdated}
            updated={updated}
          />
        )
      )}
    </div>
  );
}

export default withRouter(Content);

import React from "react";
import { withRouter, Redirect, RouteComponentProps } from "react-router";
// Type
import { FetchInitType } from "@type/FetchInit";
import { ContentMatchParams } from "./Content.type";
// CSS-In-JS
import { makeStyles, Theme } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
// Custom-Components
import ContentCard from "./ContentCard";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    height: "3rem",
    color: theme.jettBlack[500],
  },
  cardWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.jettBlack[300],
  },
}));

function filteredByCompany(data: any) {
  const result = data.reduce((bef: any, cur: any) => {
    bef[cur.company] = bef[cur.company] || [];
    bef[cur.company].push(cur);
    return bef;
  }, Object.create(null));

  return result;
}

const Content: React.FC<RouteComponentProps<ContentMatchParams>> = ({ match }) => {
  const classes = useStyles();

  const [splitedData, setSplitedData] = React.useState<any>({ loading: "loading" });
  const [updated, setUpdated] = React.useState(0);
  const [error, setError] = React.useState(false);

  const fetchCategoryQuestions = async () => {
    const url = `https://the-heritage.herokuapp.com/${match.params.class}`;

    const fetchInit: FetchInitType = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const fetchRes = await fetch(url, fetchInit);
      const jsonData = await fetchRes.json();
      setSplitedData(filteredByCompany(jsonData.questions));
    } catch {
      setError(true);
    }
  };

  React.useEffect(() => {
    setSplitedData({ loading: "loading" });
    fetchCategoryQuestions();
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
            setUpdated={() => setUpdated(updated + 1)}
          />
        )
      )}
    </div>
  );
};

export default withRouter(Content);

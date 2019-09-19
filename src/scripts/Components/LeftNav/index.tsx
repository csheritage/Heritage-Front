import React from "react";
import { Link } from "react-router-dom";
// Type
import { FetchInitType } from "@type/FetchInit";
// CSS-In-JS
import { makeStyles, Theme } from "@material-ui/core";
import { ListItem, ListItemText, LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.jettBlack[300],
    width: "20vw",
    height: "100vh",
  },
  content: {
    color: theme.jettBlack[500],
    height: "3rem",
  },
  link: {
    textDecoration: "none",
  },
}));

function LeftNav() {
  const classes = useStyles();

  const [list, setList] = React.useState(["loading"]);

  const fetchCategories = async () => {
    const url = "https://the-heritage.herokuapp.com/categories";
    const fetchInit: FetchInitType = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };
    const fetchRes = await fetch(url, fetchInit);
    const jsonData = await fetchRes.json();
    setList(jsonData.categories);
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={classes.root}>
      {list &&
        list.map(item =>
          item !== "loading" ? (
            <Link to={`/${item}`} key={item} className={classes.link}>
              <ListItem button className={classes.content}>
                <ListItemText primary={item} />
              </ListItem>
            </Link>
          ) : (
            <LinearProgress key={item} />
          )
        )}
      <Link to="/create" className={classes.link}>
        <ListItem button className={classes.content}>
          <ListItemText primary={`SHARE-EXPERIENCE`} />
        </ListItem>
      </Link>
      <Link to="/exam" className={classes.link}>
        <ListItem button className={classes.content}>
          <ListItemText primary={`EXAM`} />
        </ListItem>
      </Link>
    </div>
  );
}

export default LeftNav;

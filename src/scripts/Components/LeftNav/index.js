import React from "react";
import { Link } from "react-router-dom";
// css-in-js
import { makeStyles } from "@material-ui/styles";
import { ListItem, ListItemText, LinearProgress } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "20vw",
    height: "100vh",
    backgroundColor: "#99958b",
  },
  content: {
    height: "3rem",
    color: "#fff8e7",
  },
  link: {
    textDecoration: "none",
  },
});

function LeftNav() {
  const classes = useStyles();
  const [list, setList] = React.useState(["loading"]);

  React.useEffect(() => {
    const url = "https://the-heritage.herokuapp.com/categories";
    const init = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };

    fetch(url, init).then(res => {
      res.json().then(jsonData => {
        setList(jsonData.categories);
      });
    });
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

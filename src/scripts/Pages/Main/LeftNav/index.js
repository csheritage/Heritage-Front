import React from "react";
// css-in-js
import { makeStyles } from "@material-ui/styles";
import { ListItem, ListItemText } from "@material-ui/core";

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
});

function LeftNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ListItem button className={classes.content}>
        <ListItemText primary={`IOS`} />
      </ListItem>
      <ListItem button className={classes.content}>
        <ListItemText primary={`FRONT`} />
      </ListItem>
      <ListItem button className={classes.content}>
        <ListItemText primary={`BACK`} />
      </ListItem>
    </div>
  );
}

export default LeftNav;

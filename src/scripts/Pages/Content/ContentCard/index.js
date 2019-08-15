import React from "react";
import { Link } from "react-router-dom";
// css-in-js
import { makeStyles } from "@material-ui/styles";
import { Paper, Button } from "@material-ui/core";
// custom-components
import Dialog from "./Dialog";

const useStyles = makeStyles({
  cardWrapper: {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "1rem",
  },
  tag: {
    color: "#fff",
    fontSize: "0.7rem",
    borderRadius: "2rem",
    backgroundColor: "#99958b",
    display: "inline-block",
    padding: "0.4rem",
  },
  companyName: {
    fontSize: "1.5rem",
    padding: "1rem",
  },
  line: {
    width: "100%",
  },
  paperWrapper: {
    margin: "1rem 0rem",
    backgroundColor: "#45433e",
    color: "#fff8e7",
  },
  link: {
    textDecoration: "none",
  },
  logoContainer: {
    display: "flex",
  },
});

function ContentCard({ data, setUpdated, updated }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [targetId, setTargetId] = React.useState("");

  function handleDelete(id) {
    const url = `https://the-heritage.herokuapp.com/heritage/?_id=${id}`;

    const init = {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };

    fetch(url, init).then(res => {
      setUpdated(updated + 1);
    });
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <Paper className={classes.paperWrapper}>
      <div className={classes.companyName}>{data[0].company}</div>
      <hr className={classes.line} />
      {data.map(v => (
        <div className={classes.cardWrapper} key={v._id}>
          <div className={classes.title}>{`- ${v.question}`}</div>
          <div className={classes.logoContainer}>
            <Button
              key={v._id}
              onClick={() => {
                setTargetId(v._id);
                handleOpen();
              }}
            >
              <i className="material-icons" style={{ color: "#fff8e7" }}>
                delete
              </i>
            </Button>
            <Link to={`/edit/${v._id}/`} className={classes.link}>
              <Button key={v._id}>
                <i className="material-icons" style={{ color: "#fff8e7" }}>
                  create
                </i>
              </Button>
            </Link>
          </div>
        </div>
      ))}
      <Dialog
        open={open}
        setOpen={setOpen}
        handleFunc={() => {
          handleDelete(targetId);
        }}
      />
    </Paper>
  );
}

export default ContentCard;

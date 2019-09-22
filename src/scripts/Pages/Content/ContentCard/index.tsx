import React from "react";
import { Link } from "react-router-dom";
// Type
import { ContentCardProps } from "./ContentCard.type";
import { FetchInitType } from "@type/FetchInit";
// CSS-In-JS
import { makeStyles, Theme } from "@material-ui/core";
import { Paper, Button } from "@material-ui/core";
// Custom-Components
import AlertDialog from "./AlertDialog";

const useStyles = makeStyles((theme: Theme) => ({
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
    backgroundColor: theme.jettBlack[300],
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
    backgroundColor: theme.jettBlack[100],
    color: theme.jettBlack[500],
  },
  link: {
    textDecoration: "none",
  },
  logoContainer: {
    display: "flex",
  },
}));

const ContentCard: React.FC<ContentCardProps> = ({ data, setUpdated }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const [targetId, setTargetId] = React.useState<string>("");

  const handleDelete = async (id: string) => {
    const url = `https://the-heritage.herokuapp.com/heritage/?_id=${id}`;

    const fetchInit: FetchInitType = {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(url, fetchInit);
    setUpdated();
  };

  function handleOpen() {
    setOpen(true);
  }

  return (
    <Paper className={classes.paperWrapper}>
      <div className={classes.companyName}>{data[0].company}</div>
      <hr className={classes.line} />
      {data.map((v: any) => (
        <div className={classes.cardWrapper} key={v._id}>
          <div className={classes.title}>{`- ${v.question}`}</div>
          <div className={classes.logoContainer}>
            {console.log(v)}
            <Button
              key={v._id}
              onClick={() => {
                setTargetId(v._id);
                handleOpen();
              }}>
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
      <AlertDialog
        open={open}
        handleClose={() => setOpen(false)}
        handleFunc={() => {
          handleDelete(targetId);
        }}
      />
    </Paper>
  );
};

export default ContentCard;

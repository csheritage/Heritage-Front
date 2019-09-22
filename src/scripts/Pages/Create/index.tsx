import React from "react";
// css-in-js
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
// custom-component
import FormData from "./FormData";
const useStyles = makeStyles({
  form: {
    width: "100%",
    display: "flex",
    backgroundColor: "#99958b",
    position: "relative",
  },
  addButton: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    width: "5rem",
  },
  removeButton: {
    position: "absolute",
    top: "4rem",
    right: "1rem",
    width: "5rem",
  },
});

const Create: React.FC = () => {
  const classes = useStyles();
  const [formNum, setFormNum] = React.useState(1);

  return (
    <div className={classes.form}>
      <FormData formNum={formNum} />
      <Button
        variant="contained"
        onClick={() => setFormNum(formNum + 1)}
        className={classes.addButton}>
        폼 추가
      </Button>
      <Button
        variant="contained"
        onClick={() => setFormNum(formNum - 1)}
        className={classes.removeButton}>
        폼 제거
      </Button>
    </div>
  );
};

export default Create;

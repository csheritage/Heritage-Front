import React from "react";
import { Redirect } from "react-router-dom";
// css-in-js
import { makeStyles } from "@material-ui/styles";
import { TextField, MenuItem, Button } from "@material-ui/core";
// custom-component
import SnackBar from "./SnackBar";

const useStyles = makeStyles({
  textField: {
    width: "7rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    color: "#fff8e7",
  },
  menu: {
    width: "200px",
  },
  question: {
    width: "50rem",
    marginLeft: "1rem",
    marginRight: "1rem",
  },
  companyName: {
    widht: "30rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  submitButton: {
    position: "absolute",
    top: "7rem",
    right: "1rem",
    width: "5rem",
  },
});

function FormData({ formNum }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    class: "ios",
    company: "",
  });
  const [saved, setSaved] = React.useState(false);
  const [openSanckbar, setOpenSnackbar] = React.useState(false);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    const url = "https://the-heritage.herokuapp.com/categories";
    const init = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };

    fetch(url, init).then(res => {
      res.json().then(jsonData => {
        const categories = jsonData.categories.map(v => {
          return { value: v, label: v };
        });
        setList(categories);
      });
    });
  }, []);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = async () => {
    if (!values.company) {
      setOpenSnackbar(true);
      return;
    }

    const dataArr = Object.keys(values);
    const questionArr = dataArr.filter(v => !isNaN(+v)).map(v => values[v]);
    const url = "https://the-heritage.herokuapp.com/heritage";
    const obj = {
      category: values.class,
      company: values.company,
      questions: questionArr,
    };
    const init = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    };
    await fetch(url, init);
    await setSaved(true);
  };

  return (
    <>
      <form id="form" className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="CLASS"
            className={classes.textField}
            value={values.class}
            onChange={handleChange("class")}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
          >
            {list.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-name"
            label="COMPANY-NAME"
            className={classes.companyName}
            value={values.company}
            onChange={handleChange("company")}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          {new Array(formNum).fill(0).map((v, i) => (
            <TextField
              key={i}
              id="outlined-full-width"
              label="QUESTION"
              className={classes.question}
              fullWidth
              margin="normal"
              variant="outlined"
              onChange={handleChange(i)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          ))}
        </div>
      </form>
      <Button variant="contained" onClick={() => submit()} className={classes.submitButton}>
        저장
      </Button>
      {saved && <Redirect to={values.class} />}
      <SnackBar open={openSanckbar} onClose={() => setOpenSnackbar(false)} />
    </>
  );
}

export default FormData;

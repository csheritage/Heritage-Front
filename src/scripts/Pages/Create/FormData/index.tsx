import React from "react";
import { Redirect } from "react-router-dom";
// Type
import { FetchInitType } from "@type/FetchInit";
import { FormDataProps, ValueType } from "./FormData.type";
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

const FormData: React.FC<FormDataProps> = ({ formNum }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState<ValueType>({
    class: "ios",
    company: "",
  });
  const [saved, setSaved] = React.useState<boolean>(false);
  const [openSanckbar, setOpenSnackbar] = React.useState<boolean>(false);
  const [list, setList] = React.useState([]);

  const getQuestions = async () => {
    const url = "https://the-heritage.herokuapp.com/categories";

    const fetchInit: FetchInitType = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const fetchRes = await fetch(url, fetchInit);
      const jsonData = await fetchRes.json();
      const categories = jsonData.categories.map((v: any) => {
        return { value: v, label: v };
      });
      setList(categories);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getQuestions();
  }, []);

  const handleChange = (name: any) => (event: any) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = async () => {
    if (!values.company) {
      setOpenSnackbar(true);
      return;
    }

    const dataArr = Object.keys(values);
    const questionArr = dataArr.filter(v => !isNaN(+v)).map((v: any) => "class");
    const url = "https://the-heritage.herokuapp.com/heritage";
    const obj = {
      category: values.class,
      company: values.company,
      questions: questionArr,
    };
    const init: FetchInitType = {
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
            variant="outlined">
            {list.map((option: any) => (
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
          {new Array(formNum).fill("").map((v: any, i: any) => (
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
};

export default FormData;

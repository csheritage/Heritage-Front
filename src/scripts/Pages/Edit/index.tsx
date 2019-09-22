import React from "react";
import { Redirect, withRouter, RouteComponentProps } from "react-router-dom";
// Type
import { FetchInitType } from "@type/FetchInit";
import { EditorMatchParams } from "./Edit.type";
// CSS-In-JS
import { makeStyles } from "@material-ui/styles";
import { TextField, MenuItem, Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
// Custom-Component
import SnackBar from "../Create/FormData/SnackBar";

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
  loaderWrapper: {
    margin: "5rem",
  },
});

const Editor: React.FC<RouteComponentProps<EditorMatchParams>> = ({ match }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({ loading: "loading" });
  const [saved, setSaved] = React.useState(false);
  const [openSanckbar, setOpenSnackbar] = React.useState(false);
  const [list, setList] = React.useState([]);

  const editCategories = async () => {
    const url: string = "https://the-heritage.herokuapp.com/categories";
    const fetchInit: FetchInitType = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };
    const fetchRes = await fetch(url, fetchInit);
    const jsonData = await fetchRes.json();
    const categories = jsonData.categories.map((v: any) => {
      return { value: v, label: v };
    });
    setList(categories);

    const dataUrl = `https://the-heritage.herokuapp.com/heritage/?_id=${match.params.id}`;
    const dataFetchInit: FetchInitType = {
      method: "GET",
      mode: "cors",
    };
    const fetchDataRes = await fetch(dataUrl, dataFetchInit);
    const dataJsonData = await fetchDataRes.json();
    setValues({
      class: dataJsonData.category,
      company: dataJsonData.company,
      question: dataJsonData.question,
    });
  };
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

    const dataUrl = `https://the-heritage.herokuapp.com/heritage/?_id=${match.params.id}`;
    const dataInit = {
      method: "GET",
      mode: "cors",
    };

    fetch(dataUrl, dataInit).then(res => {
      res.json().then(jsonData => {
        setValues({
          class: jsonData.category,
          company: jsonData.company,
          question: jsonData.question,
        });
      });
    });
  }, [match]);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = async () => {
    if (!values.company) {
      setOpenSnackbar(true);
      return;
    }
    const url = `https://the-heritage.herokuapp.com/heritage/?_id=${match.params.id}`;
    const obj = {
      category: values.class,
      company: values.company,
      question: values.question,
    };
    const init = {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" },
    };
    await fetch(url, init).then(res => {
      if (res.status === 200) {
        setSaved(true);
      }
    });
  };
  return values.loading === "loading" ? (
    <div className={classes.loaderWrapper}>
      <CircularProgress />
    </div>
  ) : (
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
          <TextField
            id="outlined-full-width"
            label="QUESTION"
            className={classes.question}
            fullWidth
            margin="normal"
            value={values.question}
            variant="outlined"
            onChange={handleChange("question")}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </form>
      <Button variant="contained" onClick={() => submit()} className={classes.submitButton}>
        수정
      </Button>
      {saved && <Redirect to={`/${values.class}`} />}
      <SnackBar open={openSanckbar} onClose={() => setOpenSnackbar(false)} />
    </>
  );
};

export default withRouter(Editor);

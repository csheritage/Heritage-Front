import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import NoMatch from "../Pages/NoMatch";
import Main from "../Pages/Main";

function PageRouter() {
  return (
    <Router>
      <>
        <Route component={Header} />

        <Switch>
          {/* root Page */}
          <Route exact path="/" component={Main} />

          {/* 404 page */}
          <Route component={NoMatch} />
        </Switch>

        <Route component={Footer} />
      </>
    </Router>
  );
}

export default PageRouter;

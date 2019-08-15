import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LeftNav from "../Components/LeftNav";
import NoMatch from "../Pages/NoMatch";
import Main from "../Pages/Main";
import Create from "../Pages/Create";
import Content from "../Pages/Content";
import Edit from "../Pages/Edit";
import Exam from "../Pages/Exam";
import ExamCardList from "../Pages/Exam/ExamCardList";

function PageRouter() {
  return (
    <Router>
      <>
        <Route component={Header} />
        <div style={{ display: "flex" }}>
          <Route component={LeftNav} />
          <Switch>
            {/* root Page */}
            <Route exact path="/" component={Main} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/edit/:id" component={Edit} />
            <Route exact path="/exam" component={Exam} />
            <Route exact path="/exam/:class" component={ExamCardList} />
            <Route path="/:class" component={Content} />
            {/* 404 page */}
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Route component={Footer} />
      </>
    </Router>
  );
}

export default PageRouter;

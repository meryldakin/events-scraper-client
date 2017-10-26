import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Container from "./Container.js";
import Login from "./components/Login.js";

// Router importing
import { withRouter } from "react-router";

// Redux importing
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Container} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./Container.js";

// Router importing
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

// Redux importing
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Events</h1>
        </header>
        <Container />
      </div>
    );
  }
}

export default withRouter(App);

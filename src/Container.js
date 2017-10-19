import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Events from "./components/Events.js";
class Container extends Component {
  render() {
    return (
      <div>
        <Route path="/events" component={Events} />
      </div>
    );
  }
}

export default Container;

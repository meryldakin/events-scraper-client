import React, { Component } from "react";
// router
import { Route } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//components
import Events from "./components/Events.js";
//helpers
import * as actions from "./actions/index";

class Container extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    console.log("PROPS FROM CONTAINER", this.props);
    if (this.props.events.events.length > 0) {
      return (
        <div>
          <Route path="/events" component={Events} />
        </div>
      );
    } else {
      return <div> "LOADING!"</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchEvents: actions.fetchEvents
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

import React, { Component } from "react";
// router
import { Route, withRouter, Switch } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//components
import Events from "./components/Events.js";
import EventPage from "./components/EventPage.js";
//helpers
import * as actions from "./actions/index";

class Container extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    if (this.props.events.length > 0) {
      return (
        <div>
          <Switch >
            <Route exact path="/events" render={() => <Events />} />
            <Route
              path="/events/:id"
              render={({ match }) => {
                const event = this.props.events.find(
                  event => event.id === parseInt(match.params.id)
                );
                return <EventPage eventPage={event}  />;
              }}
            />
          </Switch>
        </div>
      );
    } else {
      return <div> LOADING! </div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.events
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));

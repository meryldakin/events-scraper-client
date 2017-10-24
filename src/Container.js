import React, { Component } from "react";
// router
import { Route, withRouter, Switch, Link } from "react-router-dom";
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
    this.props.fetchCurrentUser();
  }

  render() {
    if (this.props.events.length > 0) {
      return (
        <div>
          <h1> Hi {this.props.current_user.first_name}!</h1>
          <p>
            {" "}
            See a list of all the <Link to="/events">events</Link> to get
            started!{" "}
          </p>
          <Switch>
            <Route exact path="/events" render={() => <Events />} />
            <Route
              path="/events/:id"
              render={({ match }) => {
                const event = this.props.events.find(
                  event => event.id === parseInt(match.params.id)
                );
                return <EventPage eventPage={event} />;
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
    events: state.events.events,
    current_user: state.users.current_user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchEvents: actions.fetchEvents,
      fetchCurrentUser: actions.fetchCurrentUser
    },
    dispatch
  );
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Container)
);

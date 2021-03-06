import React, { Component } from "react";
// router
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//components
import Events from "./components/Events.js";
import EventPage from "./components/EventPage.js";
import MyEvents from "./components/MyEvents.js";
import Navbar from "./html_elements/Navbar";

//helpers
import * as actions from "./actions/index";

class Container extends Component {
  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchCurrentUser();
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/login");
  };

  render() {

    if (!this.props.events) {
      return <div>"LOADING!"</div>;
    }

    if (this.props.current_user && localStorage.getItem("token")) {
      if (this.props.events.length > 0) {
        return (
          <div>
            <Navbar
              userName={this.props.current_user.first_name}
              location={this.props.history}
            />

            <Switch>
              <Route exact path="/events" render={() => <Events />} />
              <Route path="/my-events" render={() => <MyEvents />} />
              <Route
                path="/events/:id"
                render={({ match }) => {
                  const event = this.props.events.find(
                    event => event.id === parseInt(match.params.id, 10)
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
    } else {
      return (
        <div>
          <Redirect to={"/login"} />
        </div>
      );
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
  return {
    fetchEvents: () => dispatch(actions.fetchEvents()),
    fetchCurrentUser: () => dispatch(actions.fetchCurrentUser())

  }
}


export default withRouter(
  connect(mapStateToProps, actions)(Container)
);

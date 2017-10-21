import React from "react";
import { getEvents } from "../api";
import { Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import EventPage from "./EventPage.js";

function Events(props) {
  const events = props.events.map(event => {
    return (
      <li>
        <Link to={`/events/${event.id}`}>{event.name}</Link>
      </li>
    );
  });

  return (
    <div>
    {console.log("im in evets", props)}
      <ul>{events}</ul>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  events: state.events.events
});

export default withRouter(connect(mapStateToProps)(Events));

import React from "react";
import { getEvents } from "../api";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom"


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
      <ul>{events}</ul>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  events: state.events.events
});

export default withRouter(connect(mapStateToProps)(Events));

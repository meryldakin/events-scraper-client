import React from "react";
import { getEvents } from "../api";
import { Route, Link } from "react-router-dom";

import { connect } from "react-redux";
import EventPage from "./EventPage.js";

function Events(props) {
  console.log("im in evets", props);
  const events = props.events.events.map(event => {
    return (
      <li>
        <Link to={`/events/${event.id}`}>{event.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <Route
        path="/events/:id"
        render={({ match }) => {
          const event = props.events.events.find(
            event => event.id === parseInt(props.match.params.id)
          );
          console.log("event from match", event);
          return <EventPage eventPage={event} />;
        }}
      />
      <ul>{events}</ul>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.loading,
  events: state.events
});

export default connect(mapStateToProps)(Events);

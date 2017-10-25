import React from "react";
import { getEvents } from "../api";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
// files
import * as actions from "../actions/index";

function Events(props) {
  const handleSave = eventID => {
    props.saveEvent(eventID, props.current_user);
  };

  const eventIsSaved = e => {
    return props.user_events.find(user_event => user_event.id === e)
      ? true
      : false;
  };

  const saveButton = eventID => {
    return (
      <button value={eventID} onClick={() => handleSave(eventID)}>
        Save Event!
      </button>
    );
  };

  const events = props.events.map(event => {
    return (
      <li key={event.id}>
        <Link to={`/events/${event.id}`}>{event.name}</Link>
        {eventIsSaved(event.id) ? "Saved to My Events!" : saveButton(event.id)}
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
  events: state.events.events,
  user_events: state.users.user_events,
  current_user: state.users.current_user
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveEvent: actions.saveEvent
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events));

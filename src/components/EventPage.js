import React from "react";
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// files
import * as actions from "../actions";

function EventPage(props) {
  console.log("event page props", props);
  const handleSave = () => {
    props.saveEvent(props.eventPage.id, props.current_user);
  };
  const handleRemove = () => {
    props.removeEvent(props.eventPage.id, props.current_user);
  };

  const toggleSaveButton = event => {
    if (props.user_events.find(e => e.id === props.eventPage.id)) {
      return (
        <button value={event.id} onClick={handleRemove}>
          Remove from My Events!
        </button>
      );
    } else {
      return (
        <button value={event.id} onClick={handleSave}>
          Save Event!
        </button>
      );
    }
  };

  return (
    <div>
      <h1>
        {" "}
        {props.eventPage.month}: {props.eventPage.name}{" "}
      </h1>
      <p>{props.eventPage.date}</p>
      <a href={props.eventPage.url} target="_blank">
        Link
      </a>
      <p> {props.eventPage.description} </p>

      {toggleSaveButton(props.eventPage)}

      <p>
        <Link to="/events">Back to Events!</Link>
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    current_user: state.users.current_user,
    user_events: state.users.user_events
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveEvent: actions.saveEvent,
      removeEvent: actions.removeSavedEvent
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);

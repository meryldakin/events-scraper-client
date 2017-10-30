import React from "react";

//redux
import { connect } from "react-redux";
import EventsList from "../html_elements/EventsList";

function MyEvents(props) {
  return (
    <EventsList
      savedEvent={true}
      user_events={props.user_events}
      events={props.user_events}
      current_user={props.current_user}
    />
  );
}

const mapStateToProps = state => {
  return {
    user_events: state.users.user_events,
    current_user: state.users.current_user,
    events: state.events.events
  };
};

export default connect(mapStateToProps)(MyEvents);

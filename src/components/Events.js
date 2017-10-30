import React from "react";
import { connect } from "react-redux";
import EventsList from "../html_elements/EventsList";

function Events(props) {
  return (
    <EventsList
      events={props.events}
      user_events={props.user_events}
      current_user={props.current_user}
      savedEvents={false}
    />
  );
}
const mapStateToProps = state => ({
  events: state.events.events,
  user_events: state.users.user_events,
  current_user: state.users.current_user
});
export default connect(mapStateToProps)(Events);

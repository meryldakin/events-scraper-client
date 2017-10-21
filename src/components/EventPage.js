import React from "react";
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// files
import * as actions from "../actions/index";

function EventPage(props) {
  const handleSave = () => {
    props.saveEvent(props.eventPage.id)
  }
  return <div>
    <h1> {props.eventPage.name} </h1>
    <button onClick={handleSave}>Save!</button>

    <p><Link to="/events">Back to Events!</Link></p>
  </div>;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveEvent: actions.saveEvent
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(EventPage);

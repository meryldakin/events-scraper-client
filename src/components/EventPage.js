import React from "react";
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// files
import * as actions from "../actions/index";

function EventPage(props) {
  const handleSave = () => {
    console.log("event page props", props.current_user_id)
    props.saveEvent(props.eventPage.id, props.current_user_id)
  }
  return <div>
    <h1> {props.eventPage.name} </h1>
    <p> {props.eventPage.description} </p>
    <button onClick={handleSave}>Save!</button>

    <p><Link to="/events">Back to Events!</Link></p>
  </div>;
}

function mapStateToProps(state){
  return {
    current_user_id: state.users.current_user.id
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveEvent: actions.saveEvent
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);

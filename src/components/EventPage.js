import React from "react";
import { Link } from "react-router-dom";

function EventPage(props) {
  return <div>
  <h1> {props.eventPage.name} </h1>
  <Link to="/events">Back to Events!</Link>
  </div>;
}

export default EventPage;

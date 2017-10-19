import React from "react";

function EventPage(props) {
  console.log("props from event page", props);
  return <div>{props.eventPage.name}</div>;
}

export default EventPage;

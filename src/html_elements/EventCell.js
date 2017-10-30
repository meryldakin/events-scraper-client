import React from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function EventCell(props) {
  return props.eventsArray.map(event => {
    return (
      <Grid.Column key={event.id}>
        <Link to={`/events/${event.id}`}>
          <h4>{event.name}</h4>
        </Link>
        <p>{event.date}</p>
        {props.savedEventToggle(event.id)}
      </Grid.Column>
    );
  });
}

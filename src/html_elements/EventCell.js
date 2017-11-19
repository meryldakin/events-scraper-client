import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function EventCell(props) {
  return props.eventsArray.map(event => {
    return (
      <Grid.Column key={event.id}>
        <Link to={`/events/${event.id}`}>
          <h4>{event.name}</h4>
          <Image src={event.image_url ? event.image_url : "https://i.pinimg.com/736x/e8/9e/86/e89e86d0d3160284c86c6d779e021471--chevron-rugs-gray-chevron.jpg"}/>
        </Link>
        <p>{event.date}</p>
        {props.savedEventToggle(event.id)}
      </Grid.Column>
    );
  });
}

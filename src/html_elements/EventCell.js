import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function EventCell(props) {
  return (
    <Grid.Column key={props.singleEvent.id}>
      <Link to={`/events/${props.singleEvent.id}`}>
        <h4>{props.singleEvent.name}</h4>
        <Image src={props.singleEvent.image_url ? props.singleEvent.image_url : "https://i.pinimg.com/736x/e8/9e/86/e89e86d0d3160284c86c6d779e021471--chevron-rugs-gray-chevron.jpg"} />
      </Link>
      <p>{props.singleEvent.date}</p>
      {props.savedEventToggle(props.singleEvent.id)}
    </Grid.Column>
  );
}

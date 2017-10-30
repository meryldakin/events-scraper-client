import React from "react";
import { Button } from "semantic-ui-react";

export default function SaveButton(props) {
  return (
    <Button
      value={props.event}
      onClick={props.handleRemoveEvent}
      negative={true}
      size="mini"
    >
      Remove Event!
    </Button>
  );
}

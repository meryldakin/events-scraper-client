import React from "react";
import { Button } from "semantic-ui-react";

export default function SaveButton(props) {
  return (
    <Button
      size="mini"
      disabled={props.alreadySaved}
      positive={!props.alreadySaved}
      value={props.eventId}
      onClick={() => props.handleSave(props.eventId)}
    >
      Save Event!
    </Button>
  );
}

import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import EventCell from "./EventCell";
import * as helpers from "../helpers";

export default function EventsByMonth(props) {
  const month = props.month;
  const events = props.events;
  return (
    <div key={month}>
      <Segment>
        <h1>{helpers.mappedMonths[month]} Events</h1>
      </Segment>
      <Grid columns={3}>
        <EventCell
          eventsArray={helpers.filterEventsByMonth(events, month)}
          savedEventToggle={props.savedEventToggle}
        />
      </Grid>
    </div>
  );
}

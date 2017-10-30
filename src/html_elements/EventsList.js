import React from "react";
import { Link } from "react-router-dom";
import { Button, Segment, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";

function EventsList(props) {
  const handleSave = eventID => {
    props.saveEvent(eventID, props.current_user);
  };

  const handleRemoveEvent = event => {
    console.log(props.current_user);
    props.removeSavedEvent(event.target.value, props.current_user);
  };

  const eventIsSaved = event_id => {
    return props.user_events.find(user_event => user_event.id === event_id)
      ? saveButton(event_id, true)
      : saveButton(event_id, false);
  };

  const removeEventButton = event => {
    return (
      <Button
        value={event}
        onClick={handleRemoveEvent}
        negative={true}
        size="mini"
      >
        Remove Event!
      </Button>
    );
  };

  const savedEventToggle = event_id => {
    return props.savedEvent
      ? removeEventButton(event_id)
      : eventIsSaved(event_id);
  };

  const saveButton = (eventID, alreadySaved) => {
    return (
      <Button
        size="mini"
        disabled={alreadySaved}
        positive={!alreadySaved}
        value={eventID}
        onClick={() => handleSave(eventID)}
      >
        Save Event!
      </Button>
    );
  };

  const _pluck = function(array, key) {
    return array.map(function(object) {
      return object[key];
    });
  };

  const filterEventsByMonth = (eventsArray, month) => {
    return eventsArray.filter(event => {
      return event.month === month;
    });
  };

  const months = [...new Set(_pluck(props.events, "month"))];

  //FORMAT EACH EVENT
  const formatEachEvent = eventsArray => {
    return eventsArray.map(event => {
      return (
        <Grid.Column key={event.id}>
          <Link to={`/events/${event.id}`}>
            <h4>{event.name}</h4>
          </Link>
          <p>{event.date}</p>
          {savedEventToggle(event.id)}
        </Grid.Column>
      );
    });
  };
  // FORMAT ALL MONTHS TOGETHER
  const formatAllMonths = () => {
    return months.map(month => {
      return (
        <div>
          <Segment>
            <h1>{month} Events</h1>
          </Segment>
          <Grid columns={3}>
            {formatEachEvent(filterEventsByMonth(props.events, month))}
          </Grid>
        </div>
      );
    });
  };

  /**********
      RETURN BELOW
      **********/
  return formatAllMonths();
  /**********
      RETURN ABOVe
      **********/
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveEvent: actions.saveEvent,
      removeSavedEvent: actions.removeSavedEvent
    },
    dispatch
  );
}

export default withRouter(connect(null, mapDispatchToProps)(EventsList));

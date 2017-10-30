import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import SaveButton from "../html_elements/SaveButton";
import RemoveButton from "../html_elements/RemoveButton";
import EventsByMonth from "../html_elements/EventsByMonth";
import * as actions from "../actions";
import * as helpers from "../helpers";

function EventsList(props) {
  const months = helpers.getMonthsFromEvents(props.events);

  const eventIsSaved = eventId => {
    return props.user_events.find(user_event => user_event.id === eventId) ? (
      <SaveButton
        eventId={eventId}
        alreadySaved={true}
        handleSave={handleSave}
      />
    ) : (
      <SaveButton
        handleSave={handleSave}
        eventId={eventId}
        alreadySaved={false}
      />
    );
  };

  const handleSave = eventID => {
    props.saveEvent(eventID, props.current_user);
  };

  const handleRemoveEvent = event => {
    props.removeSavedEvent(event.target.value, props.current_user);
  };

  const savedEventToggle = event_id => {
    return props.savedEvent ? (
      <RemoveButton event={event_id} handleRemoveEvent={handleRemoveEvent} />
    ) : (
      eventIsSaved(event_id)
    );
  };

  const formatAllMonths = months => {
    return helpers.sortedMonths(months).map((month, i) => {
      return (
        <EventsByMonth
          key={i}
          month={month}
          events={props.events}
          savedEventToggle={savedEventToggle}
        />
      );
    });
  };

  return formatAllMonths(months);
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

import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import EventCell from "./EventCell";
import * as helpers from "../helpers";
import { connect } from "react-redux";
import * as actions from "../actions";
import SaveButton from "../html_elements/SaveButton";
import RemoveButton from "../html_elements/RemoveButton";

class EventsByMonth extends React.Component {
  constructor() {
    super();
    this.state = {
      eventsArray: []
    }
  }
  componentDidMount() {
    const month = this.props.month;
    const events = this.props.events;
    this.setState(
      {
        eventsArray: helpers.filterEventsByMonth(events, month)
      }
    )
  }

  eventIsSaved = eventId => {
    return this.props.user_events.find(user_event => user_event.id === eventId) ? (
      <SaveButton
        eventId={eventId}
        alreadySaved={true}
        handleSave={this.handleSave}
      />
    ) : (
        <SaveButton
          handleSave={this.handleSave}
          eventId={eventId}
          alreadySaved={false}
        />
      );
  };

  savedEventToggle = event_id => {
    return this.props.savedEvent ? (
      <RemoveButton event={event_id} handleRemoveEvent={this.handleRemoveEvent} />
    ) : (
        this.eventIsSaved(event_id)
      );
  };

  handleSave = eventID => {
    this.props.saveEvent(eventID, this.props.current_user);
  };

  handleRemoveEvent = event => {
    this.props.removeSavedEvent(event.target.value, this.props.current_user);
  };

  eventCells = () => {
    return this.state.eventsArray.map(event => {
      return (<EventCell
        key={event.id}
        singleEvent={event}
        savedEventToggle={this.savedEventToggle}
      />)
    })
  }
  render() {

    if (!this.props.current_user) {
      return <div> Loading Events by month </div>
    }
    return (
      <div key={this.props.month}>
        <Segment>
          <h1>{helpers.mappedMonths[this.props.month]} Events</h1>
        </Segment>
        <Grid columns={3}>
          {this.eventCells()}
        </Grid>
      </div>
    );

  }
}

function mapStateToProps(state) {

  return {
    user_events: state.users.user_events,
    current_user: state.users.current_user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveEvent: (eventId, currentUser) => dispatch(actions.saveEvent(eventId, currentUser)),
    removeSavedEvent: (eventId, currentUser) => dispatch(actions.removeSavedEvent(eventId, currentUser))
  }
}

export default connect(mapStateToProps, actions)(EventsByMonth)
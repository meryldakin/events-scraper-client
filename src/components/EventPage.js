import React from "react";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// files
import * as actions from "../actions";
//semantic
import { Button, Segment, Image } from "semantic-ui-react";
import EventImage from "../html_elements/EventImage.js"

function EventPage(props) {
  console.log("event page props", props);
  const handleSave = () => {
    props.saveEvent(props.eventPage.id, props.current_user);
  };
  const handleRemove = () => {
    props.removeEvent(props.eventPage.id, props.current_user);
  };

  const toggleSaveButton = event => {
    if (props.user_events.find(e => e.id === props.eventPage.id)) {
      return (
        <Button value={event.id} onClick={handleRemove} negative={true}>
          Remove from My Events
        </Button>
      );
    } else {
      return (
        <Button value={event.id} onClick={handleSave} positive={true}>
          Save Event!
        </Button>
      );
    }
  };
  console.log("From EventPage", props)

  return (
    <div>
      <Segment>
        <h1>
          <a href={props.eventPage.url} target="_blank">
            {props.eventPage.name}
          </a>
        </h1>
      </Segment>
      <h3>When: {props.eventPage.date}</h3>
      <EventImage image_url={props.eventPage.image_url}/>

      <h3>What:</h3>
      <p> {props.eventPage.description} </p>

      {toggleSaveButton(props.eventPage)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    current_user: state.users.current_user,
    user_events: state.users.user_events
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveEvent: actions.saveEvent,
      removeEvent: actions.removeSavedEvent
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);

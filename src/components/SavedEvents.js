import React from "react";
import { Link } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// files
import { removeSavedEvent } from "../actions/index";
import { Button, Segment, Grid } from "semantic-ui-react";

function SavedEvents(props) {
  const handleRemoveEvent = event => {
    props.removeSavedEvent(event.target.value, props.current_user_id);
  };

  const events = props.user_events.map(event => (
    <Grid.Column key={event.id}>
      <Link to={`/events/${event.id}`}>
        <h3>{event.name}</h3>
      </Link>{" "}
      <Button value={event.id} onClick={handleRemoveEvent}>
        Remove Event!
      </Button>
    </Grid.Column>
  ));

  if (props.user_events.length > 0) {
    console.log("props from saved events", props);
    return (
      <div>
        <h1> Saved Events </h1>
        <Grid columns={3} celled>
          {events}
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <h1> Saved Events </h1>
        <p>
          {" "}
          You don't have any events! Go back to the events page and click some!{" "}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_events: state.users.user_events,
    current_user_id: state.users.current_user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeSavedEvent: removeSavedEvent
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedEvents);

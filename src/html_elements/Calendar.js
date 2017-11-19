import React, {Component} from "react";
import { Grid, Segment } from "semantic-ui-react";
import EventCalendar from "react-big-calendar";
import moment from "moment";
import style from 'react-big-calendar/lib/css/react-big-calendar.css';
//redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// files
import * as actions from "../actions";

class Calendar extends Component {
  render() {

    const events = [
  {
    'title': 'All Day Event very long title',
    'allDay': true,
    'start': new Date(2015, 3, 0),
    'end': new Date(2015, 3, 1)
  }
]

EventCalendar.momentLocalizer(moment);
const height = { height: "900px" };
let allViews = Object.keys(EventCalendar.Views).map(k => EventCalendar.Views[k])

    return (

        <EventCalendar
        style={{...style, ...height}}
          events={events}
          defaultDate={new Date(2015, 3, 1)}
          views={allViews}
        />

    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

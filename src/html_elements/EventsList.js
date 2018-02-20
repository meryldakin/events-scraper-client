import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import EventsByMonth from "../html_elements/EventsByMonth";
import * as actions from "../actions";
import * as helpers from "../helpers";

class EventsList extends React.Component {
  constructor() {
    super();
    this.state = {
      months: []
    }
  }

  componentDidMount() {
    this.setState(
      {
        months: helpers.getMonthsFromEvents(this.props.events)
      }
    )
  }



  formatAllMonths = months => {
    return helpers.sortedMonths(months).map((month, i) => {
      console.log(month)
      return (
        <EventsByMonth
          savedEvent={this.props.savedEvent}
          key={i}
          month={month}
          events={this.props.events}
        />
      );
    });
  };
  render() {

    return this.formatAllMonths(this.state.months);

  }
}

function mapDispatchToProps(dispatch) {
  return {
    saveEvent: (eventId, currentUser) => dispatch(actions.saveEvent(eventId, currentUser)),
    removeSavedEvent: (eventId, currentUser) => dispatch(actions.removeSavedEvent(eventId, currentUser))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(EventsList));

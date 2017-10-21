import * as apiHelpers from "../api";

export function fetchEvents() {
  return function(dispatch) {
    dispatch({ type: "START_FETCH_EVENTS" });
    apiHelpers
      .getEvents()
      .then(data => dispatch({ type: "FETCH_EVENTS", payload: data }));
  };
}
export function saveEvent(id) {
  return function(dispatch) {
    dispatch({ type: "START_SAVE_EVENT" });
    apiHelpers
      .saveEvent(id)
      .then(data => dispatch({ type: "SAVE_EVENT", payload: data }));
  };
}

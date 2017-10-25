import * as apiHelpers from "../api";

// USERS

export function loginUser(user_params) {
  return function(dispatch) {
    dispatch({ type: "START_LOGIN_USER" });
    apiHelpers.login(user_params).then(data => {
      if (data) {
        localStorage.setItem("token", data["token"]);
        return dispatch({ type: "LOGIN_USER", payload: data });
      } else {
        console.log("Error - bad user!");
      }
    });
  };
}

export function fetchCurrentUser() {
  return function(dispatch) {
    dispatch({ type: "START_GET_USER" });
    apiHelpers
      .getCurrentUser()
      .then(data => dispatch({ type: "GET_USER", payload: data }));
  };
}

// EVENTS

export function fetchEvents() {
  return function(dispatch) {
    dispatch({ type: "START_FETCH_EVENTS" });
    apiHelpers
      .getEvents()
      .then(data => dispatch({ type: "FETCH_EVENTS", payload: data }));
  };
}
export function saveEvent(id, user) {
  return function(dispatch) {
    dispatch({ type: "START_SAVE_EVENT" });
    apiHelpers
      .saveEvent(id, user)
      .then(data => dispatch({ type: "SAVE_EVENT", payload: data }));
  };
}

export function removeSavedEvent(event_id, user) {
  console.log("remove event user id", user);
  return function(dispatch) {
    dispatch({ type: "START_REMOVE_EVENT" });
    apiHelpers
      .deleteSavedEvent(event_id, user)
      .then(data => dispatch({ type: "REMOVE_EVENT", payload: data }));
  };
}

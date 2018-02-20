import * as apiHelpers from "../api";

// USERS

export function loginUser(user_params, history) {
  return function (dispatch) {
    dispatch({ type: "START_SET_USER" });
    apiHelpers.login(user_params)
      .then(data => {
        console.log(data)
        if (!data.error) {
          localStorage.setItem("token", data["token"]);
          dispatch({ type: "SET_USER", payload: data });

        } else {
          console.log("Error - bad user!");
        }
      });
  };
}

export function fetchCurrentUser() {
  return function (dispatch) {
    dispatch({ type: "START_SET_USER" });
    apiHelpers
      .getCurrentUser()
      .then(data => {
        if (!data.error) {
          return dispatch({ type: "SET_USER", payload: data })
        } else {
          console.log(data);
        }
      }
      );
  };
}

// EVENTS

export function fetchEvents() {
  return function (dispatch) {
    dispatch({ type: "START_FETCH_EVENTS" });
    apiHelpers
      .getEvents()
      .then(data => dispatch({ type: "FETCH_EVENTS", payload: data }));
  };
}
export function saveEvent(id, user) {
  return function (dispatch) {
    dispatch({ type: "START_SAVE_EVENT" });
    apiHelpers
      .saveEvent(id, user)
      .then(data => dispatch({ type: "SAVE_EVENT", payload: data }));
  };
}

export function removeSavedEvent(event_id, user) {
  return function (dispatch) {
    dispatch({ type: "START_REMOVE_EVENT" });
    apiHelpers
      .deleteSavedEvent(event_id, user)
      .then(data => dispatch({ type: "REMOVE_EVENT", payload: data }));
  };
}

export function importEvents(eventURL) {
  return function (dispatch) {
    dispatch({ type: "START_IMPORT_EVENTS" });
    apiHelpers
      .importEvents(eventURL)
      .then(data => dispatch({ type: "START_IMPORT_EVENTS", payload: data }));
  };
}

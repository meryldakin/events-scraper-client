import * as apiHelpers from "../api";

export function fetchFriends(params) {
  console.log("fetch friends hit", params);
  return function(dispatch) {
    dispatch({ type: "START_FETCH_EVENTS" });
    fetch(`http://localhost:3000/events`)
      .then(res => res.json())
      .then(data => dispatch({ type: "FETCH_EVENTS", payload: data }));
  };
}

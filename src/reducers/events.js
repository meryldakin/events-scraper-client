const defaultState = { events: [], loading: false };
export default function events(state = defaultState, action) {
  switch (action.type) {
    case "START_FETCH_EVENTS":
      return {
        ...state,
        loading: true
      };
    case "FETCH_EVENTS":
      console.log("events", action.payload)
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

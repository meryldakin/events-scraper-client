const defaultState = { events: [] };
export default function events(state = defaultState, action) {
  switch (action.type) {
    case "START_FETCH_EVENTS":
      return {
        ...state,
        loading: true
      };
    case "FETCH_EVENTS":
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

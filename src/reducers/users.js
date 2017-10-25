const defaultState = { current_user: {}, user_events: [] };
export default function users(state = defaultState, action) {
  switch (action.type) {
    case "START_LOGIN_USER":
      return {
        ...state,
        loading: true
      };
    case "LOGIN_USER":
      return {
        ...state,
        current_user: action.payload.user,
        user_events: action.payload.events,
        loading: false
      };
    case "START_GET_USER":
      return {
        ...state,
        loading: true
      };
    case "GET_USER":
      return {
        ...state,
        current_user: action.payload.user,
        user_events: action.payload.events,
        loading: false
      };
    case "START_SAVE_EVENT":
      return {
        ...state,
        loading: true
      };
    case "SAVE_EVENT":
      return {
        ...state,
        user_events: [...state.user_events, action.payload],
        loading: false
      };
    case "START_REMOVE_EVENT":
      return {
        ...state,
        loading: true
      };
    case "REMOVE_EVENT":
      console.log("remove event payload", action.payload);
      const eventRemovalIndex = state.user_events.findIndex(
        user_event => user_event.id === action.payload
      );
      console.log(state.user_events, eventRemovalIndex);
      return {
        ...state,
        user_events: [
          ...state.user_events.slice(0, eventRemovalIndex),
          ...state.user_events.slice(eventRemovalIndex + 1)
        ],
        loading: false
      };
    default:
      return state;
  }
}

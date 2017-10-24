const defaultState = { current_user: {} };
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
        current_user: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
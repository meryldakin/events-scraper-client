// USERS

export function login(user_params) {
  return fetch(`http://localhost:3000/login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(user_params)
  }).then(res => res.json());
}

export function getCurrentUser() {
  return fetch(`http://localhost:3000/session_user`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ token: localStorage.token }),
    method: "POST"
  }).then(res => res.json());
}

// EVENTS

export function getEvents() {
  return fetch(`http://localhost:3000/events`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then(res => res.json());
}

export function saveEvent(event_id, current_user) {
  return fetch(`http://localhost:3000/users/${current_user.id}/events`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ event_id: event_id }),
    method: "POST"
  }).then(res => res.json());
}

export function deleteSavedEvent(event_id, current_user) {
  return fetch(`http://localhost:3000/remove_saved_event`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      event_id: event_id,
      user_id: current_user.id
    }),
    method: "DELETE"
  }).then(res => res.json());
}

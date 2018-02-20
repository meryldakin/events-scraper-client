// USERS

const url = 'http://localhost:3000/'
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
}

export function login(user_params) {
  return fetch(`${url}login`, {
    headers,
    method: "POST",
    body: JSON.stringify(user_params)
  }).then(res => res.json());
}

export function getCurrentUser() {
  let token = { token: localStorage.getItem("token") }
  return fetch(`${url}session_user`, {
    headers,
    method: "POST",
    body: JSON.stringify(token)
  }).then(res => res.json());
}

// EVENTS

export function getEvents() {
  return fetch(`${url}events`, {
    headers,
    method: "GET"
  }).then(res => res.json());
}

export function saveEvent(event_id, current_user) {
  return fetch(`${url}users/${current_user.id}/events`, {
    headers,
    body: JSON.stringify({ event_id: event_id }),
    method: "POST"
  }).then(res => res.json());
}

export function deleteSavedEvent(event_id, current_user) {
  console.log("props delete saved event,", event_id, current_user)
  return fetch(`${url}remove_saved_event`, {
    headers,
    body: JSON.stringify({
      event_id: event_id,
      user_id: current_user.id
    }),
    method: "DELETE"
  }).then(res => res.json());
}

export function importEvents(eventURL) {
  return fetch(`${url}import_events`, {
    headers,
    body: JSON.stringify({
      eventURL: eventURL
    })
  }).then(res => res.json());
}

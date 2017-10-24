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

export function getEvents() {
  return fetch(`http://localhost:3000/events`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "GET"
  }).then(res => res.json());
}

export function saveEvent(id) {
  console.log("id from save event", id);
  return fetch(`http://localhost:3000/users/1/events`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ event_id: id }),
    method: "POST"
  }).then(res => res.json());
}

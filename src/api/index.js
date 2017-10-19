export function getEvents() {
  return fetch(`http://localhost:3000/events`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

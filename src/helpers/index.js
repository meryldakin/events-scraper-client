export function _pluck(array, key) {
  return array.map(function (object) {
    return object[key];
  });
}

export function filterEventsByMonth(eventsArray, month) {
  return eventsArray.filter(event => {
    return event.month === month;
  });
}

export function getMonthsFromEvents(events) {
  return [...new Set(_pluck(events, "month"))];
}

export function sortedMonths(months) {
  return months.sort((a, b) => {
    return a - b;
  });
}

export const mappedMonths = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

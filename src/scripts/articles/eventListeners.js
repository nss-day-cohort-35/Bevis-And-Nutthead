import userEvent from "./eventFetch.js";
// let formContainer = document.querySelector(".eventForm");
function eventFormListener() {
  console.log("whatever");
  let eventName = document.querySelector(".eventInput").value;
  let dateEvent = document.querySelector(".dateEventInput").value;
  let eventLocation = document.querySelector(".locationInput").value;
  console.log("date", dateEvent);
  let event = {
    name: "",
    date: "",
    location: ""
  };
  event.name = eventName;
  event.date = dateEvent;
  event.location = eventLocation;
  userEvent.getUserEvent(event)
    .then(event => event.json)
    .then(event => console.log(event));
}
export default eventFormListener;
import userEvent from "./eventFetch.js";
// let formContainer = document.querySelector(".eventForm");
function eventFormListener() {
  console.log("whatever", sessionStorage.user_id);
  let eventName = document.querySelector(".eventInput").value;
  let dateEvent = document.querySelector(".dateEventInput").value;
  let eventLocation = document.querySelector(".locationInput").value;
  let userId = sessionStorage.user_id;
  console.log("date", dateEvent);
  let event = {
    name: "",
    date: "",
    location: "",
    userId: null
  };
  event.name = eventName;
  event.date = dateEvent;
  event.location = eventLocation;
  event.userId = userId;
  userEvent.getUserEvent(event)
    .then(event => event.json)
    .then(event => console.log(event));
}
export default eventFormListener;
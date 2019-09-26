import userEvent from "./eventFetch.js";
import eventBuilder from "./eventInjector.js"

// let formContainer = document.querySelector(".eventForm");
function eventFormListener() {
  let eventName = document.querySelector(".eventInput").value;
  let dateEvent = document.querySelector(".dateEventInput").value;
  let eventLocation = document.querySelector(".locationInput").value;
  let userId = JSON.parse(sessionStorage.getItem("credentials"));
  let event = {
    name: "",
    date: "",
    location: "",
    userId: null
  };
  event.name = eventName;
  event.date = dateEvent;
  event.location = eventLocation;
  event.userId = userId.userId;
  userEvent.getUserEvent(event)
    .then(events => eventBuilder(events));
}
export default eventFormListener;
import userAuthentication from "./registerUser.js";
import login from "./userLogin.js";
import eventFormListener from "../events/eventListeners.js";

// let email = document.querySelector(".emailInput")
// let password = document.querySelector(".passwordInput")
// let dateOfBirth = document.querySelector(".dateInput")
let eventListenerDiv = document.querySelector("#eventListenerDiv");
const eventListeners = {
  myListener() {
    eventListenerDiv.addEventListener("click", event => {
      if (event.target.classList.value === "registerButton") {
        userAuthentication.registerUser();
      } else if (event.target.classList.value === "loginButton") {
        login.emailLogin();
      } else if (event.target.classList.value === "saveEventButton") {
        eventFormListener();
      }
    });
  }
};
export default eventListeners;

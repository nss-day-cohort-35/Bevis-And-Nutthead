import userAuthentication from "./registerUser.js";
import login from "./userLogin.js";
import eventFormListener from "../events/eventListeners.js";

// let email = document.querySelector(".emailInput")
// let password = document.querySelector(".passwordInput")
// let dateOfBirth = document.querySelector(".dateInput")
let container = document.querySelector("#container");
const eventListeners = {
  myListener() {
    container.addEventListener("click", event => {
      if (event.target.classList.value === "registerButton") {
        userAuthentication.registerUser();
      } else if (event.target.classList.value === "loginButton") {
        login.emailLogin();
        // alert("You gotta Sign Up!")
      } else if (event.target.classList.value === "saveEventButton") {
        eventFormListener();
      }
    });
  }
};
export default eventListeners;

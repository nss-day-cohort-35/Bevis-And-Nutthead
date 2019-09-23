import userAuthientication from "./registerUser.js";
import login from "./userLogin.js";
import eventFormListener from "../articles/eventListeners.js";

// let email = document.querySelector(".emailInput")
// let password = document.querySelector(".passwordInput")
// let dateOfBirth = document.querySelector(".dateInput")
let container = document.querySelector("#container");
// let container = document.querySelector("#container")
const eventListeners = {

    myListener() {
        container.addEventListener("click", (event) => {
            if (event.target.classList.value === "registerButton") {
                console.log("firing after")
                userAuthientication.registerUser()
            } else if (event.target.classList.value === "loginButton") {
                console.log(event)
                login.emailLogin();
                // alert("You gotta Sign Up!")
            } else if (event.target.classList.value === "saveEventButton") {
                eventFormListener();
                console.log("Hello");
              }
        })
    }
}
export default eventListeners
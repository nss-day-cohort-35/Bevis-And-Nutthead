import userAuthentication from "./registerUser.js";
import login from "./userLogin.js";
import eventFormListener from "../events/eventListeners.js";
import taskFormButton from "../tasks/eventListeners.js";
import taskForm from "../tasks/taskForm.js";
import taskCreation from "../tasks/taskCreation.js";
import taskBuilder from "../tasks/taskInjection.js"

// let email = document.querySelector(".emailInput")
// let password = document.querySelector(".passwordInput")
// let dateOfBirth = document.querySelector(".dateInput")
let container = document.querySelector("#container");
// let container = document.querySelector("#container")
const eventListeners = {
  myListener() {
    container.addEventListener("click", event => {
      if (event.target.classList.value === "registerButton") {
        userAuthentication.registerUser();
      } else if (event.target.classList.value === "loginButton") {
        login.emailLogin();
      } else if (event.target.classList.value === "saveEventButton") {
        eventFormListener();
      } else if (event.target.classList.value === "taskFormToDomButton") {
          container.innerHTML = "",
            taskForm();
            taskCreation.createTask(),
            taskFormButton.taskFormToDomButton()
      } else if (event.target.classList.value === "saveTask") {
        container.innerHTML = "",
        taskFormButton.taskFormToDomButton();
        taskBuilder();
      }
    });
  }
};
export default eventListeners;

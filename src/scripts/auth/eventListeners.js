import userAuthentication from "./registerUser.js";
import login from "./userLogin.js";
import taskFormButton from "../tasks/eventListeners.js";
import taskForm from "../tasks/taskForm.js";
import taskCreation from "../tasks/taskCreation.js";
import taskBuilder from "../tasks/taskInjection.js";
import eventForm from "../events/eventForm.js";
import eventFormListener from "../events/eventCreation.js";
import eventFormButton from "../events/eventListeners.js";
import newsForm from "../news/newsForm.js";
import newsFormListener from "../news/newsCreation.js";
import newsFormButton from "../news/eventListeners.js";

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
        container.innerHTML = "";
        eventFormButton.eventFormToDomButton();
      } else if (event.target.classList.value === "eventFormToDomButton") {
        container.innerHTML = "",
          eventForm();
        eventFormButton.eventFormToDomButton();
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
      else if (event.target.classList.value === "newsFormButton") {
        newsFormListener();
        container.innerHTML = "";
        newsFormButton.newsFormToDomButton();
      } else if (event.target.classList.value === "newsFormToDomButton") {
        container.innerHTML = "";
        newsForm();
        newsFormButton.newsFormToDomButton();
      }
    });
  }
};
export default eventListeners;
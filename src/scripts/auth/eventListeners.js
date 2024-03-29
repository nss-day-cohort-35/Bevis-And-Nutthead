import userAuthentication from "./registerUser.js";
import login from "./userLogin.js";
import taskFormButton from "../tasks/eventListeners.js";
import taskForm from "../tasks/taskForm.js";
import taskCreation from "../tasks/taskCreation.js";
import taskBuilder from "../tasks/taskInjection.js";
import eventForm from "../events/eventForm.js";
import eventFormListener from "../events/eventCreation.js";
import eventFormButton from "../events/eventListeners.js";
import taskFetchs from "../tasks/taskFetchs.js"
import newsForm from "../news/newsForm.js";
import newsFormListener from "../news/newsCreation.js";
import newsFormButton from "../news/eventListeners.js";

// let email = document.querySelector(".emailInput")
// let password = document.querySelector(".passwordInput")
// let dateOfBirth = document.querySelector(".dateInput")
let credentials = JSON.parse(sessionStorage.getItem("credentials"));
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
        container.innerHTML = "";
        eventFormButton.eventFormToDomButton();
      } else if (event.target.classList.value === "eventFormToDomButton") {
        container.innerHTML = "",
          eventForm();
        eventFormButton.eventFormToDomButton();
      } else if (event.target.classList.value === "taskFormToDomButton") {
        (container.innerHTML = ""), taskForm();
        taskFormButton.taskFormToDomButton();
      } else if (event.target.classList.value === "saveTask") {
        taskCreation.createTask()
      } else if (event.target.classList.value === "completedButton") {
        let taskId = event.target.id.split("-")[1];
        taskFetchs.getTask(taskId).then(task => {
          task[0].completed = true;
          taskFetchs.editTask(task[0])
          .then(tasks => {
            console.log(tasks)
            container.innerHTML = ""
            taskBuilder(tasks);
            taskFormButton.taskFormToDomButton();
          });
        });
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
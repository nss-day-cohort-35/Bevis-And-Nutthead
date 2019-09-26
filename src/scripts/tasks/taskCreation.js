import taskFetchs from "./taskFetchs.js";
import taskBuilder from "./taskInjection.js";
import taskFormButton from "./eventListeners.js"
import newsFormButton from "../news/eventListeners.js"
import eventFormButton from "../events/eventListeners.js"

const taskCreation = {
  createTask() {
    let dateArray = [];
    let container = document.querySelector("#container");
    let taskName = document.querySelector(".taskNameInput").value;
    let taskDescription = document.querySelector(".taskDescriptionInput").value;
    let taskCompletion = document.querySelector(".completionDate").value;
    let credentials = JSON.parse(sessionStorage.getItem("credentials"));
    let dateNow = new Date();
    container.innerHTML = "";

    let date = {
      month: dateNow.getMonth(),
      day: dateNow.getDay(),
      year: dateNow.getFullYear()
    };

    dateArray.push(date);
    let newTask = {
      name: "",
      description: "",
      entryDate: "",
      completionDate: "",
      completed: null,
      userId: null
    };

    (newTask.name = taskName),
      (newTask.description = taskDescription),
      (newTask.entryDate = dateArray),
      (newTask.completionDate = taskCompletion),
      (newTask.completed = false),
      (newTask.userId = credentials.userId);
    taskFetchs.postTask(newTask).then(response => {
      container.innerHTML = "";
      taskBuilder(response);
      taskFormButton.taskFormToDomButton();
      newsFormButton.newsFormToDomButton();
      eventFormButton.eventFormToDomButton();
    });
  }
};
export default taskCreation;

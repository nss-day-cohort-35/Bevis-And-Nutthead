import taskBuilder from "./taskInjection.js";
import taskFormButton from "./eventListeners.js";

let container = document.querySelector("#container");
const taskFetchs = {
  getTask: id => {
    container.innerHTML = "";
    return fetch(`http://localhost:8088/tasks?id=${id}`)
    .then(task => task.json());
  },
  getAllTasks: userId => {
    container.innerHTML = "";
    return fetch(`http://localhost:8088/tasks?userId=${userId}&&completed=false`)
      .then(task => task.json())
  },
  postTask: task => {
    return fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    }).then(task => task.json())
  },
  editTask: (task) => {
      console.log("task", task)
    return fetch(`http://localhost:8088/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    }).then(task => task.json())
  }
};
export default taskFetchs
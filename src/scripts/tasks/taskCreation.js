import taskFetchs from "./taskFetchs.js"

const taskCreation = {
    createTask() {
        let dateArray = [];
        let taskDiv = document.querySelector(".taskDiv");
        let taskName = document.querySelector(".taskNameInput");
        let taskDescription = document.querySelector(".taskDescriptionInput");
        let taskCompletion = document.querySelector(".completionDate");
        let credentials = JSON.parse(sessionStorage.getItem("credentials"));
        let dateNow = new Date();

        let date = {
         month: dateNow.getMonth(),
         day: dateNow.getDay(),
         year: dateNow.getFullYear()
        }

        dateArray.push(date);
        let newTask = {
            name: "",
            description: "",
            entryDate: "",
            completionDate: "",
            completed: null,
            userId: null
        }
        taskDiv.addEventListener("click", (event) => {
            if (event.target.classList.value === "saveTask") {
                newTask.name = taskName.value,
                    newTask.description = taskDescription.value,
                    newTask.entryDate = dateArray,
                    newTask.completionDate = taskCompletion.value,
                    newTask.completed = false,
                    newTask.userId = credentials.userId
                taskFetchs.postTask(newTask)
                    .then(task => task.json())
                    .then(parsedTasks => parsedTasks)
            }
        })
    }
}
export default taskCreation
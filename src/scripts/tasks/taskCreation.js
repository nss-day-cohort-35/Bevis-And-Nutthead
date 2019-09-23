import taskFetchs from "./taskFetchs.js"

const taskCreation = {
    createTask() {
        let dateArray = [];
        let taskDiv = document.querySelector(".taskDiv");
        let taskName = document.querySelector(".taskNameInput");
        let taskDescription = document.querySelector(".taskDescriptionInput");
        let taskCompletion = document.querySelector(".completionDate");
        let userId = sessionStorage.user_id;
        let dateNow = new Date();

        let date = {
         month: dateNow.getMonth(),
         day: dateNow.getDay(),
         year: dateNow.getFullYear()
        }

        dateArray.push(date);
        console.log(dateArray[0].year)
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
                    newTask.userId = userId
                console.log(newTask);
                taskFetchs.postTask(newTask)
                    .then(task => task.json())
                    .then(parsedTasks => console.log(parsedTasks))
            }
        })
    }
}
export default taskCreation
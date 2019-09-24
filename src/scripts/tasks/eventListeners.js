import taskForm from "./taskForm.js"
import taskCreation from "./taskCreation.js"

let container = document.querySelector("#container");
const taskFormButton = {
    taskFormToDomButton: () => {
        let buildTaskFormButton = `
        <div class="taskFormToDomDiv">
        <button class="taskFormToDomButton" type="button">Ugh New Task</button>
        </div>
        `
        return container.innerHTML += buildTaskFormButton;
    },
    createNewTask: () => {
        let taskFormToDomDiv = document.querySelector(".taskFormToDomButton");
        taskFormToDomDiv.addEventListener("click", () => {
            console.log("clicked")
            container.innerHTML = "",
                taskForm();
            taskCreation.createTask(),
                this.taskFormToDomButton(),
                taskFormButton.createNewTask();
        })
    }
}
export default taskFormButton;
let container = document.querySelector("#container");
const taskFormButton = {
    taskFormToDomButton: () => {
        let buildTaskFormButton = `
        <div class="taskFormToDomDiv">
            <button class="taskFormToDomButton" type="button">Ugh New Task</button>
        </div>
        `
        return container.innerHTML += buildTaskFormButton;
    }
}
export default taskFormButton;
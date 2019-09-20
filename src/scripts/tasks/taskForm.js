const taskForm = () => {
    let form = `
    <div class="taskDiv"> 
        <form>
            <fieldset>
                <label class="taskLabel">Task name:</label>
                <input type="text" placeholder="Task Name" class="taskNameInput">
            </fieldset>
            <fieldset>
                <label class="taskLabel">What's the Task?</label>
                <input type="text" placeholder="My task is..." class="taskDescriptionInput">
            </fieldset>
            <fieldset>
                <label class="taskLabel">When should it be done by? </label>
                <input type="date" placeholder="Completion Date" class="completionDate">
            </fieldset>
        </form>
    </div>
    `
    let container = document.querySelector("#container")
    return container.innerHTML += form
}

export default taskForm
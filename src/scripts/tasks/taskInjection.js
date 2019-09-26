import taskFetchs from "./taskFetchs.js"

let container = document.querySelector("#container");
//let userId = sessionStorage.user_id;
function taskBuilder() {
    let userId = JSON.parse(sessionStorage.getItem("credentials"));
    taskFetchs.getAllTasks(userId.userId)
    .then(tasks => {
        let i = 0;
            for (i = 0; i < tasks.length; i++) {
                let myTask = `
                   <div class="tasksContainer">
                       <div class="taskHeader">
                            <h2 class="completionDate">Completion Date: ${tasks[i].completionDate}</h2>
                        </div>
                          <div class="taskContent">
                            <h3 class="taskName">Name: ${tasks[i].name}</h3>
                            <p class="taskDescription">Task: ${tasks[i].description}</p> 
                           <p class="entryDate">Task Made on: ${tasks[i].entryDate[0].month}-${tasks[i].entryDate[0].day}-${tasks[i].entryDate[0].year}</p>
                        </div>
                             <button type="button" class="completedButton" id="task-${tasks[i].id}">I guess I did it</button>
                            <button type="button" class="editTaskButton" id="task-edit-${tasks[i].id}">Damn it</button>
                     </div>`
                container.innerHTML += myTask;
            }
        })
}

export default taskBuilder;
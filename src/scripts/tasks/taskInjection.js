import taskFetchs from "./taskFetchs.js"

let container = document.querySelector("#container");
//let userId = sessionStorage.user_id;
function taskBuilder() {
    let userId = JSON.parse(sessionStorage.getItem("credentials"));
    console.log("user",userId.userId);
    taskFetchs.getTasks(userId.userId)
        .then(tasks => {
             for (let i = 0; i <= tasks.length; i++){
                  let myTask = `
                   <div class="tasksContainer">
                       <div class="taskHeader">
                             <h2 class="completionDate">Completion Date: ${tasks[i].completionDate}</h2>
                        </div>
                          <div class="taskContent">
                            <h3 class="taskName">Name: ${tasks[i].name}</h3>
                            <p class="taskDescription">Task: ${tasks[i].description}</p> 
                           <p class="entryDate">Task Made on: ${tasks[i].entryDate[0].month}-${tasks[i].entryDate[0].day}-${tasks[i].entryDate[0].year}</p>
                        </div>
                             <button type="button" class="completedButton" id="task-${i}">I guess I did it</button>
                            <button type="button" class="editTaskButton" id="task-edit-${i}">Damn it</button>
                     </div>`
            return container.innerHTML += myTask;
            }
        })
}

export default taskBuilder;
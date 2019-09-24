import taskFetchs from "./taskFetchs.js"

let container = document.querySelector("#container");
let userId = sessionStorage.user_id;
function taskBuilder() {
    taskFetchs.getTasks(userId)
        .then(tasks => {
             for (let i =0; i = tasks.length; i++){
                                 let myTask = `
                                <div class="tasksContainer">
                                   <div class="taskHeader">
                                         <h2 class="completionDate">Completion Date: ${tasks.completionDate}</h2>
                                    </div>
                                      <div class="taskContent">
                                        <h3 class="taskName">Name: ${tasks.name}</h3>
                                        <p class="taskDescription">Task: ${tasks.description}</p> 
                                       <p class="entryDate">Task Made on: ${tasks.entryDate[0].month}-${tasks.entryDate[0].day}-${tasks.entryDate[0].year}</p>
                                    </div>
                                    <div class="editTaskButtonDiv">
                                         <button type="button" id="task-${i}">I guess I did it...</button>
                                     </div>
                                    <div class="completeTaskButtonDiv">
                                        <button type="button" id="task-edit-${i}">Damn it</button>
                                    </div>
                                </div>
                                `
                                 return container.innerHTML += myTask;
                            }
                
           })
}

export default taskBuilder;
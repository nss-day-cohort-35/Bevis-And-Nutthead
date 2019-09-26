import userEvent from "./eventFetch"

let container = document.querySelector("#container");
//let userId = sessionStorage.user_id;
function eventBuilder() {
    let userId = JSON.parse(sessionStorage.getItem("credentials"));
    userEvent.getEvents(userId.userId)
        .then(events => {
            let i = 0;
            for (i = 0; i < events.length; i++) {
                let myEvents = `
                   <div class="eventContainer">
                       <div class="eventHeader">
                            <h2 class="eventName">Event: ${events[i].name}</h2>
                        </div>
                          <div class="eventContent">
                           <p class="eventLocation">Location: ${events[i].location}</p> 
                           <p class="dateEvent">Event Date: ${events[i].date[0].month}-${events[i].date[0].day}-${events[i].date[0].year}</p>
                        </div>
                             <button type="button" class="completedButton" id="task-${i}">I guess I did it</button>
                            <button type="button" class="editTaskButton" id="task-edit-${i}">Damn it</button>
                     </div>`
                container.innerHTML += myEvents;
            }
        })
}

export default eventBuilder;

// let eventName = document.querySelector(".eventInput").value;
//   let dateEvent = document.querySelector(".dateEventInput").value;
//   let eventLocation = document.querySelector(".locationInput").value;
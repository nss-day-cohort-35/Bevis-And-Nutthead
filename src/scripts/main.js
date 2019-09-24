import eventListeners from "./auth/eventListeners.js"
import buildForm from "./auth/registerForm.js"
import loginForm from "./auth/loginForm.js"
//import eventForm from "./events/event.js"
/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

//const message = "Time to build an application that gives you all the information you need in a Nutshell"

//const container = document.querySelector("#container").innerHTML
// const test = dbcalls.getUserId().then(data=>{
//     console.log(data);
// })
//console.log(message)
// const message = "Time to build an application that gives you all the information you need in a Nutshell"

const container = document.querySelector("#container")
sessionStorage.clear();
container.innerHTML += buildForm()
container.innerHTML += loginForm()
eventListeners.myListener()
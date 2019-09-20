<<<<<<< HEAD
import buildForm form "./auth/registerForm.js"

=======
import dbcalls from "./auth/dbcalls.js"
import eventListeners from "./auth/eventListeners.js"
import buildForm from "./auth/registerForm.js"
import loginForm from "./auth/loginForm.js"
>>>>>>> b7a53d10460fba7907544c8c3ad0b36b4473b9c8
/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

<<<<<<< HEAD
const container = document.querySelector("#container")
container.innerHTML = buildForm()
=======
//const message = "Time to build an application that gives you all the information you need in a Nutshell"

//const container = document.querySelector("#container").innerHTML
// const test = dbcalls.getUserId().then(data=>{
//     console.log(data);
// })
//console.log(message)
// const message = "Time to build an application that gives you all the information you need in a Nutshell"

const container = document.querySelector("#container")
container.innerHTML += buildForm()
container.innerHTML += loginForm()

eventListeners.myListener()
>>>>>>> b7a53d10460fba7907544c8c3ad0b36b4473b9c8



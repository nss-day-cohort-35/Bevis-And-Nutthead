import buildForm form "./auth/registerForm.js"

/*
    Import all the tools into main.js that are needed to display
    the initial UI to the user. Either the login form should appear
    or the dashboard should be rendered.
*/

const container = document.querySelector("#container")
container.innerHTML = buildForm()


console.log(message)

import userAuthientication from "./registerUser.js"

// let email = document.querySelector(".emailInput")
// let password = document.querySelector(".passwordInput")
// let dateOfBirth = document.querySelector(".dateInput")
let container = document.querySelector("#container")
const eventListeners = {

    myListener() {
        container.addEventListener("click", (event) => {
            if (event.target.classList.value === "registerButton") {
                console.log("firing after")
                userAuthientication.registerUser()
            } else {
                // alert("You gotta Sign Up!")
            }
        })
    }
}

export default eventListeners
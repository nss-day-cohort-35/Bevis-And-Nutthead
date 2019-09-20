import dbCalls from "./dbcalls.js"

const userAuthientication = {

    registerUser() {
        let email = document.querySelector(".emailInput")
        let password = document.querySelector(".passwordInput")
        let dateOfBirth = document.querySelector(".dateInput")

        let newUser = {
            email: "",
            password: "",
            dateOfBirth: ""
        }
        let dateNow = Date()

        // console.log(dateOfBirth.value)
        // if ((dateNow.getFullYear() - dateOfBirth.value) < 17 && (dateNow.getFullYear() - dateOfBirth.value) > 15) {
            console.log("Your aloud in")
            newUser.email = email.value
            newUser.password = password.value
            newUser.dateOfBirth = dateOfBirth.value
            dbCalls.postUser(newUser)
                .then(response => response.json())
        // }
    }
}

export default userAuthientication
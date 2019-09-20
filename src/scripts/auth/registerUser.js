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
        let dateNow = new Date();

        let dateArr = []
        dateArr = dateOfBirth.value.split("-")
        console.log("date", dateArr)

        // console.log(dateOfBirth.value)
        if ((dateNow.getFullYear() - dateArr[0]) < 17 && (dateNow.getFullYear() - dateArr[0]) > 15) {
            console.log("Your aloud in")
            newUser.email = email.value
            newUser.password = password.value
            newUser.dateOfBirth = dateOfBirth.value
            dbCalls.postUser(newUser)
                .then(response => response.json())
        }
    }
}

export default userAuthientication
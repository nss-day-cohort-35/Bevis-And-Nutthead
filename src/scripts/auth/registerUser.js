import dbCalls from "./dbcalls.js";
import login from "./userLogin.js";
const userAuthentication = {
  registerUser() {
    let email = document.querySelector(".emailInput");
    let password = document.querySelector(".passwordInput");
    let dateOfBirth = document.querySelector(".dateOfBirthInput");

    let newUser = {
      email: "",
      password: "",
      dateOfBirth: ""
    };
    let dateNow = new Date();

    let dateArr = [];
    dateArr = dateOfBirth.value.split("-");
    if (
      dateNow.getFullYear() - dateArr[0] < 17 &&
      dateNow.getFullYear() - dateArr[0] > 15
    ) {
      newUser.email = email.value;
      newUser.password = password.value;
      newUser.dateOfBirth = dateOfBirth.value;
      dbCalls
        .postUser(newUser)
        .then(user => user.json())
        .then(parsedUser => login.registrationLogin(parsedUser));
    }
  }
};

export default userAuthentication;

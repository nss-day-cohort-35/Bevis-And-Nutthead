import taskForm from "../tasks/taskForm.js";
import dbcalls from "./dbcalls.js";
import taskBuilder from "../tasks/taskInjection.js";
import taskFormButton from "../tasks/eventListeners.js";

let loginDiv= document.querySelector("#loginDiv");
const login = {
  emailLogin: () => {
    let emailInput = document.querySelector(".emailLoginInput").value;
    let passwordInput = document.querySelector(".passwordLoginInput");
    dbcalls.getUserEmail(emailInput).then(user => {
      let validator = passwordValidator(user);
      if (validator) {
        container.innerHTML = "";
        loginDiv.innerHTML = "";
        sessionStorage.setItem(
          "credentials",
          JSON.stringify({
            email: emailInput,
            password: passwordInput.value,
            userId: user[0].id
          })
        )
       taskBuilder();
       taskFormButton.taskFormToDomButton();
        }
    });
  },
  registrationLogin: () => {
    let emailInput = document.querySelector(".emailInput").value;
    let passwordInput = document.querySelector(".passwordLoginInput");
    sessionStorage.clear();
    dbcalls.getUserEmail(emailInput).then(user => {
      let validator = passwordValidatorAfterRegistration(user);
      if (validator) {
        sessionStorage.setItem(
          "credentials",
          JSON.stringify({
            email: emailInput,
            password: passwordInput.value,
            userId: user[0].id
          })
        )
        container.innerHTML = "";
        taskForm();
      }
    });
  }
};
const passwordValidator = user => {
  let passwordInput = document.querySelector(".passwordLoginInput").value;
  if (passwordInput === user[0].password) {
    return true;
  } else {
    alert("This password is more wrong than my parents!");
    return false;
  }
};

const passwordValidatorAfterRegistration = user => {
  let passwordInput = document.querySelector(".passwordInput").value;
  if (passwordInput === user[0].password) {
    return true;
  } else {
    alert("This password is more wrong than my parents!");
    return false;
  }
};

export default login;
//1. call fetch for the login
//2. get value from the inputs from the login forms
//3. then take that value and pass it through your email and password function
//4. validate the password - another function
//5. clear the sessions storage
//6. set the session storage
//7. key is the userID(getUserID) and the userEmail(getUserEmail)

import eventForm from "../events/event.js";
import taskCreation from "../tasks/taskCreation.js";
import newsFormListener from "../news/eventListeners.js";
import newsForm from "../news/newsForm.js";
import taskForm from "../tasks/taskForm.js";
import dbcalls from "./dbcalls.js";
import allForms from "../formInjections.js";

let loginDiv = document.querySelector("#loginDiv");
const login = {
  emailLogin: () => {
    let emailInput = document.querySelector(".emailLoginInput").value;
    sessionStorage.clear();
    dbcalls
      .getUserEmail(emailInput)
      .then(user => {
        let validator = passwordValidator(user);
        if (validator) {
          sessionStorage.setItem("user_id", user[0].id);
          sessionStorage.setItem("email", user[0].email);
          loginDiv.innerHTML = "";
          allForms();
        }
      })
      .then(user => {
        taskForm()
        eventForm()
        newsForm()
        newsFormListener()
        taskCreation.createTask()
      });
  },
  registrationLogin: () => {
    let emailInput = document.querySelector(".emailInput").value;
    sessionStorage.clear();
    dbcalls.getUserEmail(emailInput).then(user => {
      let validator = passwordValidatorAfterRegistration(user);
      if (validator) {
        sessionStorage.setItem("user_id", user[0].id);
        sessionStorage.setItem("email", user[0].email);
        loginDiv.innerHTML = "";
        allForms();
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

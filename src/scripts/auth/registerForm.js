<<<<<<< HEAD
function buildForm(){
    return `
    <form>
        <fieldset id="email">
            <label>Password:</label>
            <input type="text" placeholder="Email">
        </fieldset>
        <fieldset>
            <label>Birthday:</label>
            <input type="date">
        </fieldset>
    </form>
=======
function buildForm() {
    return `
    <div class="registerForm">
    <form>
        <fieldset id="email-fieldset">
            <label>Email:</label>
            <input type="text" placeholder="Email" class="emailInput" id="email-input">
        </fieldset>
        <fieldset>
            <label>Password:</label>
            <input type="password" placeholder="Password" class="passwordInput" id="password-input">
        </fieldset>
        <fieldset>
            <label>Birthday:</label>
            <input type="date" class="dateInput" id="date-input">
        </fieldset>
        <button type="button" class="registerButton" id="register-button">Register</button>
    </form>
    </div>
>>>>>>> b7a53d10460fba7907544c8c3ad0b36b4473b9c8
    `
}

export default buildForm
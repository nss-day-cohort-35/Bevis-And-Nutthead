function buildForm() {
    sessionStorage.clear();
    return `
    <div class="registerFormFlex">
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
            <input type="date" class="dateOfBirthInput" id="date-of-birth-input">
        </fieldset>
        <button type="button" class="registerButton" id="register-button">Register</button>
    </form>
    </div>
    </div>
    `
}

export default buildForm
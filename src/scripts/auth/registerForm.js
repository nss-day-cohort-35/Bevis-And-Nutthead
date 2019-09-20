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
            <input type="text" placeholder="Password" class="passwordInput" id="password-input">
        </fieldset>
        <fieldset>
            <label>Birthday:</label>
            <input type="date" class="dateInput" id="date-input">
        </fieldset>
        <button type="button" class="registerButton" id="register-button">Register</button>
    </form>
    </div>
    `
}

export default buildForm
function loginForm() {
    return `
    <div class="loginForm">
        <form>
            <fieldset id="email">
                <label>Email:</label>
                <input type="text" placeholder="Email" class="emailLoginInput">
            </fieldset>
            <fieldset>
                <label>Password:</label>
                <input type="password" placeholder="Password" class="passwordLoginInput">
            </fieldset>
            <button type="button" class="loginButton">Login</button>
        </form>
    </div>
    `
}


export default loginForm
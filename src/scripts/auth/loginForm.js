function loginForm() {
    return `
    <div class="loginForm">
        <form>
            <fieldset id="email">
                <label>Email:</label>
                <input type="text" placeholder="Email">
            </fieldset>
            <fieldset>
                <label>Password:</label>
                <input type="text" placeholder="Password">
            </fieldset>
            <button type="button">Login</button>
        </form>
    </div>
    `
}

export default loginForm
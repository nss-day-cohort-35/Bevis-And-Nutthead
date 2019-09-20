<<<<<<< HEAD
function loginForm(){
    return `
    <form>
        <fieldset id="email">
            <label>Email:</label>
            <input type="text" placeholder="Email">
        </fieldset>
        <fieldset>
            <label>Password:</label>
            <input type="text" placeholder="Password">
        </fieldset>

    </form>
=======
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
>>>>>>> b7a53d10460fba7907544c8c3ad0b36b4473b9c8
    `
}

export default loginForm
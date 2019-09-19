function buildForm(){
    return `
    <div class="registerForm">
    <form>
        <fieldset id="email-fieldset">
            <label>Email:</label>
            <input type="text" placeholder="Email">
        </fieldset>
        <fieldset>
            <label>Password:</label>
            <input type="text" placeholder="Password">
        </fieldset>
        <fieldset>
            <label>Birthday:</label>
            <input type="date">
        </fieldset>
    </form>
    </div>
    `
}

export default buildForm
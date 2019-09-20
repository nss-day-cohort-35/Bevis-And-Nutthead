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
    `
}

export default buildForm
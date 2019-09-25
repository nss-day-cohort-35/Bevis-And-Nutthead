function eventForm() {

    let form = `
     <div class="eventForm">
        <form>
            <fieldset id="event">
                <label>Gahhh Events I guess</label>
                <input type="text" placeholder="Event that's gonna suck" class="eventInput">
                <input type="date" placeholder="Time or whatever" class="dateEventInput">
                <input type="text" placeholder="Where even is it?" class="locationInput">
            </fieldset>
            <button type="button" class="saveEventButton">Uuugh I'll go</button>
            <button type="button" class="editEventButton">Uuugh that's wrong</button>
        </form> 
    </div>`
    let eventDiv = document.querySelector("#eventDiv")
    return eventDiv.innerHTML += form
}

export default eventForm
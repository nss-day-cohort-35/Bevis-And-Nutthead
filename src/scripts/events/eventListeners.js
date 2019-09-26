let eventContainer = document.querySelector("#container");
const eventFormButton = {
    eventFormToDomButton: () => {
    let buildEventFormButton = `
    <div class="eventFormToDomDiv">
    <button class="eventFormToDomButton" type="button">Ugh New Event</button>
    </div>
    `
    return eventContainer.innerHTML += buildEventFormButton;
    }
}
export default eventFormButton;
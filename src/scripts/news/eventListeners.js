let container = document.querySelector("#container");
const newsFormButton = {
  newsFormToDomButton: () => {
    let buildNewsTaskFormButton = `
        <div class="newsFormToDomDiv">
        <button class="newsFormToDomButton" type="button">New News:</button>
        </div>
        `
    return container.innerHTML += buildNewsTaskFormButton;
  }
}
export default newsFormButton;
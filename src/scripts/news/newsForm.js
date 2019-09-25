function newsForm() {
  let form = `
      <div class="newsFormDiv">
        <form>
            <fieldset>
                <label>Date:</label>
                <input type="date" placeholder="Date" class="dateField" id="news-date">
            </fieldset>
            <fieldset>
                <label>News Sucks:</label>
                <input type="text" placeholder="fake news" class="newsName" id="news-name">
            </fieldset>
            <fieldset>
                <label>Link:</label>
                <input type="text" placeholder="Place the stupid URL here" class="urlField" id="url">
             </fieldset>
             <fieldset>
                <label>Summary:</label>
                <input type="text" placeholder="wtf" class="newsSummaryField" id="news-summary">
         </fieldset>
            <button type="button" class="newsFormButton">Click this dumb Button</button>
        </form>
      </div>
      `;
  let newsDiv = document.querySelector("#newsDiv");
  return newsDiv.innerHTML += form;
}

export default newsForm;

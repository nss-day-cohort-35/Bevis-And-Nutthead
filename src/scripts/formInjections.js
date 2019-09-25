let allFormsDiv = document.querySelector("#flexContainer")
function allForms () {
    let formDiv =`
    <div class="eventFlexDiv"></div>
    <div class="newsFlexDiv"></div>
    <div class="taskFlexDiv"></div>
    <div class="chatFlexDiv"></div>`
    console.log("formDiv", formDiv)
return allFormsDiv.innerHTML += formDiv;
}

export default allForms
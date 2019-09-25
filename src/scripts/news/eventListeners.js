import newsFetchs from "./newsFetch.js"

function newsFormListener() {
  let newsDate = document.querySelector(".dateField");
  let name = document.querySelector(".newsName");
  let link = document.querySelector(".urlField");
  let summary = document.querySelector(".newsSummaryField");
  let userId = sessionStorage.user_id;

  let newNewsObj = {
    date: "",
    name: "",
    link: "",
    summary: "",
    userId: null
  };
  let newsFormDiv = document.querySelector(".newsFormDiv");
  newsFormDiv.addEventListener("click", event => {
    if (event.target.classList.value === "newsFormButton") {
      newNewsObj.date = newsDate.value,
        newNewsObj.name = name.value,
        newNewsObj.link = link.value,
        newNewsObj.summary = summary.value,
        newNewsObj.userId = userId;
        newsFetchs.postNews(newNewsObj)
    }
  });
}
export default newsFormListener;
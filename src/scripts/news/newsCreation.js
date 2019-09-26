import newsFetchs from "./newsFetch.js";
import newsBuilder from "./newsInjection.js";

function newsFormListener() {
  let newsDate = document.querySelector(".dateField");
  let name = document.querySelector(".newsName");
  let link = document.querySelector(".urlField");
  let summary = document.querySelector(".newsSummaryField");
  let userId = JSON.parse(sessionStorage.getItem("credentials"));

  let newNewsObj = {
    date: "",
    name: "",
    link: "",
    summary: "",
    userId: null
  };
  let newsFormDiv = document.querySelector(".newsFormDiv");
  (newNewsObj.date = newsDate.value),
    (newNewsObj.name = name.value),
    (newNewsObj.link = link.value),
    (newNewsObj.summary = summary.value),
    (newNewsObj.userId = userId.userId);
  newsFetchs.postNews(newNewsObj).then(news => newsBuilder(news));
}
export default newsFormListener;

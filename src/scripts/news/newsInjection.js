import newsFetchs from "./newsFetch.js"

let container = document.querySelector("#container");
function newsBuilder() {
    let userId = JSON.parse(sessionStorage.getItem("credentials"));
    newsFetchs.getNews(userId.userId)
        .then(news => {
            let i = 0;
            for (i = 0; i < news.length; i++) {
                let myNews = `
                   <div class="newsContainer">
                       <div class="newsHeader">
                            <h2 class="newsDate">News Date: ${news[i].date}</h2>
                        </div>
                          <div class="newsContent">
                            <h3 class="newsName">Name: ${news[i].name}</h3>
                            <p class="newsSummary">Summary: ${news[i].summary}</p> 
                           <p class="newsLink">Link: ${news[i].link}</p>
                        </div>
                             <button type="button" class="completedButton" id="new-${i}">Save this ish</button>
                            <button type="button" class="editNewsButton" id="new-edit-${i}">Change it</button>
                     </div>`
                container.innerHTML += myNews;
            }
        })
}
export default newsBuilder;
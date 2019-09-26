const newsFetchs = {
    getNews: () => {
        return fetch("http://localhost:8088/news")
            .then(news => news.json())
    },
    postNews: (news) => {
        console.log(news);
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(news)
        }).then(news => news.json())
        // .then(news => console.log(news));
    }
}

export default newsFetchs
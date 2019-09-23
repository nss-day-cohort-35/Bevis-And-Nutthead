const newsFetchs = {
    getNews: () => {
        return fetch("http://localhost:8088/news")
            .then(news => news.json())
    },
    postNews: (news) => {
        return fetch("http://localhost:8088/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(news)
        })
    }
}

export default newsFetchs
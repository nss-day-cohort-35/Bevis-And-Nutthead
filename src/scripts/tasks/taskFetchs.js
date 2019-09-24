const taskFetchs = {
    getTasks: (userId) => {
        return fetch(`http://localhost:8088/tasks?userId=${userId}`)
            .then(task => task.json())
    },
    postTask: (task) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
    }
}

export default taskFetchs
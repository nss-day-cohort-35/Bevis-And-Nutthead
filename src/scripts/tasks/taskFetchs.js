const taskFetchs = {
    getTask: () => {
        return fetch("http://localhost:8088/tasks")
        .then(task => task.json())
    }
}

export default taskFetchs
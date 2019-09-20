const dbCalls = {
    getUserId: () => {
        return fetch("http://localhost:8088/users")
            .then(user => user.json())
    },

    getUserEmail(email){
        return fetch(`http://localhost:8088/users/email=${email}`)
        .then(user => user.json())
    },

    postUser(user){
        return fetch("http://localhost:8088/users", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }
}
export default dbCalls;
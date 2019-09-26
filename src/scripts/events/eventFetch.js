const userEvent = {
  getUserEvent: (event) => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    }).then(event => event.json())
  },
  getEvents: (userId) => {
    return fetch(`http://localhost:8088/events?userId=${userId}`)
      .then(event => event.json())
  }
}
export default userEvent;
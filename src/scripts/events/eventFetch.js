const userEvent = {
  getUserEvent: (event) => {
    return fetch("http://localhost:8088/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
  }
};
export default userEvent;

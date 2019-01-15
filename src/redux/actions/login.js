const URL = 'http://localhost:3001/api/v1/login%20'

const loggedIn = (data) => {
  debugger
  // return {
  //   type:"LOGGED_IN",
  //   payload: data
  // }
}

const loggingIn = (userObject) => {
  return dispatch => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObject)
    })
      .then(res => res.json())
      .then(data => dispatch(loggedIn(data)))
  }
}

export { loggingIn };

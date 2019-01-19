const URL = 'http://localhost:3001/api/v1/login%20'

const loggedIn = (data) => {
  localStorage.setItem('token', data.jwt)
  localStorage.setItem('currentUser', data.user)
  return {
    type:"LOGGED_IN",
    payload: data
  }
}

const displayLoginError = data => {
  return {
    type:'DISPLAY_LOGIN_ERROR',
    payload: data
  }
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
      .then(data => {
        if (data.message) {
          dispatch(displayLoginError(data))
        } else {
          dispatch(loggedIn(data))
        }
      }
    )
  }
}

export { loggingIn };

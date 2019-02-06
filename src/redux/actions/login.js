// const URL = 'http://localhost:3001/api/v1'
const URL = 'https://project-bankroll-backend.herokuapp.com/api/v1'

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
    fetch(`${URL}/login%20`, {
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
          dispatch(fetchingUserInbox(data.user))
        }
      }
    )
  }
}

const fetchedUserInbox = (data) => {
  return {
    type:"FETCHED_USER_INBOX",
    payload: data
  }
}

const fetchingUserInbox = (user_id) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    fetch(`${URL}/users/${user_id}`, {
      method: 'GET',
      headers: {
        "Authentication" : `Bearer ${token}`,
        "userInbox": true
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedUserInbox(data))
    })
  }
}

const userLogout = () => {
  return {
    type: 'USER_LOGOUT'
  }
}

export { loggingIn, userLogout };

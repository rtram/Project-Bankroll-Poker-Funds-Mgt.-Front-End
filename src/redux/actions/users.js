const URL = 'http://localhost:3001/api/v1/users'

const displayErrors = (data) => {
  return {
    type:"DISPLAY_ERRORS",
    payload: data
  }
}

const createdUser = (data) => {
  return {
    type:"LOGGED_IN",
    payload: data
  }
}

const creatingUser = (userObject) => {
  return dispatch => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userObject)
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          dispatch(displayErrors(data))
        } else {
          dispatch(createdUser(data))
        }
      }
    )
  }
}

const fetchedSessions = (data) => {
  return {
    type:"FETCHED_SESSIONS",
    payload: data
  }
}

const fetchingSessions = (user_id) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    fetch(`${URL}/${user_id}`, {
      method: 'GET',
      headers: {
        "Authentication" : `Bearer ${token}`,
        "userSessions": true
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedSessions(data))
    })
  }
}

const fetchedUserBalances = (data) => {
  return {
    type:"FETCHED_USER_DATA",
    payload: data
  }
}

const fetchingUserBalances = (user_id) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    fetch(`${URL}/${user_id}`, {
      method: 'GET',
      headers: {
        "Authentication" : `Bearer ${token}`,
        "userBalance": true
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedUserBalances(data))
    })
  }
}

const fetchedUserList= (data) => {
  return {
    type:"FETCHED_USER_LIST",
    payload: data
  }
}

const fetchingUserList = () => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    fetch(URL, {
      method: 'GET',
      headers: {
        "Authentication" : `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedUserList(data))
    })
  }
}

export { fetchingSessions, fetchingUserList, fetchingUserBalances, creatingUser };

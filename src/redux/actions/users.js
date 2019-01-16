const URL = 'http://localhost:3001/api/v1/users'

const fetchedSessions = (data) => {
  return {
    type:"FETCHED_SESSIONS",
    payload: data}
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
    payload: data}
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
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch(fetchedUserList(data))
    })
  }
}

export { fetchingSessions, fetchingUserList, fetchingUserBalances };

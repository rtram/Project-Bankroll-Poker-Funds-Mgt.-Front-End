const URL = 'http://localhost:3001/api/v1/users'

const fetchedUserData = (data) => {
  return {
    type:"FETCHED_USER_DATA",
    payload: data}
}

const fetchingUserData = (user_id) => {
  return (dispatch) => {
    fetch(`${URL}/${user_id}`)
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedUserData(data))
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

export { fetchingUserData, fetchingUserList };

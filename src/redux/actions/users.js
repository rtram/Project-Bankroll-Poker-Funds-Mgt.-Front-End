const URL = 'http://localhost:3001/api/v1/users'

const fetchedUserData = (data) => {
  return {type:"FETCHED_USER_DATA", data}
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

export { fetchingUserData };

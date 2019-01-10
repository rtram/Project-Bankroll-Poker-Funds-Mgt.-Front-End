const URL = 'http://localhost:3001/api/v1/users/1'

const fetchedUserData = (data) => {
  return {type:"FETCHED_USER_DATA", data}
}

const fetchingUserData = () => {
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      dispatch(fetchedUserData(data))
    })
  }
}

export { fetchingUserData };

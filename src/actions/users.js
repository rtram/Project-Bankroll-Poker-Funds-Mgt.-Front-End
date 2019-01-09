const URL = 'http://localhost:3001/api/v1/users/1'

const fetchedUserData = (data) => {
  return {type:"FETCHED_PAINTINGS", data}
}

const fetchingUserData = () => {
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch(fetchedUserData(data))
    })
  }
}

export { fetchingUserData };

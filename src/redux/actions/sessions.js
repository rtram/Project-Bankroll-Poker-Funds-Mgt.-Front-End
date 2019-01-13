const URL = 'http://localhost:3001/api/v1/sessions'

const postedSession = (data) => {
  console.log(data)
  return {
    type: 'POST_SESSION',
    payload: data
  };
}

const postingSession = sessionObject => {
  return dispatch => {
    dispatch(postedSession(sessionObject))
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sessionObject)
    })
  }
}


export { postingSession };

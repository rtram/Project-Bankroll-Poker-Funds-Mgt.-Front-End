const URL = 'http://localhost:3001/api/v1/sessions'

const postedSession = ({ date, location, hours, amount }) => {
  return {
    type: 'POST_SESSION',
    payload: { date, location, hours, amount}
  };
}

const postingSession = sessionObject => {
  return (dispatch) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sessionObject)
    })
    .then(res => res.json())
    .then(data => {
      dispatch(postedSession(data))
    })
  }
}


export { postingSession };

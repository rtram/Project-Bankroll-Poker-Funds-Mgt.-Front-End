const URL = 'http://localhost:3001/api/v1/sessions'

const postedSession = data => {
  return {
    type: 'POST_SESSION',
    payload: data
  };
}

const postingSession = sessionObject => {
  return dispatch => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sessionObject)
    })
      .then(res => res.json())
      .then(data => dispatch(postedSession(data)))
  }
}

const updatedSession = data => {
  return {
    type: 'UPDATED_SESSION',
    payload: data
  };
}

const updatingSession = sessionObject => {
  return dispatch => {
    fetch(`${URL}/${sessionObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sessionObject)
    })
      .then(res => res.json())
      .then(data => dispatch(updatedSession(data)))
  }
}

const deletedSession = data => {
  return {
    type: 'DELETED_SESSION',
    payload: data
  };
}

const deletingSession = sessionObject => {
  return dispatch => {
    dispatch(deletedSession(sessionObject))
    fetch(`${URL}/${sessionObject.id}`, {
      method: "DELETE",
    })
  }
}

export { postingSession, updatingSession, deletingSession };

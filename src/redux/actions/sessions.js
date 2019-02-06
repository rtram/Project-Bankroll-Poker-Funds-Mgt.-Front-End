// const URL = 'http://localhost:3001/api/v1'
const URL = 'https://project-bankroll-backend.herokuapp.com/api/v1'

// const loading = () => {
//   return {type: "LOADING"}
// }

const postedSession = data => {
  return {
    type: 'POST_SESSION',
    payload: data
  };
}

const displaySessionErrors = data => {
  return {
    type: 'DISPLAY_SESSION_ERRORS',
    payload: data
  }
}

const postingSession = sessionObject => {
  let token = localStorage.getItem('token')
  return dispatch => {
    fetch(`${URL}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authentication" : `Bearer ${token}`
      },
      body: JSON.stringify(sessionObject)
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          dispatch(displaySessionErrors(data.errors))
        } else {
          dispatch(postedSession(data))
        }
      }
    )
  }
}

const updatedSession = data => {
  return {
    type: 'UPDATED_SESSION',
    payload: data
  };
}

const updatingSession = sessionObject => {
  let token = localStorage.getItem('token')
  return dispatch => {
    fetch(`${URL}/sessions/${sessionObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authentication" : `Bearer ${token}`
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
  let token = localStorage.getItem('token')
  return dispatch => {
    dispatch(deletedSession(sessionObject))
    fetch(`${URL}/sessions/${sessionObject.id}`, {
      method: "DELETE",
      headers: {
        "Authentication" : `Bearer ${token}`
      }
    })
  }
}

export { postingSession, updatingSession, deletingSession };

const URL = 'http://localhost:3001/api/v1/likes'

const postingLike = likeObject => {
  let token = localStorage.getItem('token')
  return dispatch => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authentication" : `Bearer ${token}`
      },
      body: JSON.stringify(likeObject)
    })
  }
}

const deletingLike = likeObject => {
  let token = localStorage.getItem('token')
  return dispatch => {
    fetch(`${URL}/${likeObject.id}`, {
      method: "DELETE",
      headers: {
        "Authentication" : `Bearer ${token}`
      }
    })
  }
}

export { postingLike, deletingLike };

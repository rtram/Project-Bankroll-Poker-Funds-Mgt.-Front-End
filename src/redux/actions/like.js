const URL = 'http://localhost:3001/api/v1/likes'

const postedLike = data => {
  return {
    type:"POSTED_LIKE",
    payload: data
  }
}

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
      .then(res => res.json())
      .then(data => {
        dispatch(postedLike(data))
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

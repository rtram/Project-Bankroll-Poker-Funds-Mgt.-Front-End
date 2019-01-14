const URL = 'http://localhost:3001/api/v1/users'

const updatedUserBalance = (data) => {
  return {
    type:"UPDATED_USER_BALANCE",
    payload: data
  }
}

const updatingUserBalance = (userObject) => {
  return dispatch => {
    fetch(`${URL}/${userObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObject)
    })
      .then(res => res.json())
      .then(data => dispatch(updatedUserBalance(data)))
  }
}

export { updatingUserBalance };

const URL = 'http://localhost:3001/api/v1'
// const URL = 'https://project-bankroll-backend.herokuapp.com/api/v1'

const updatedUserBalance = (data) => {
  return {
    type:"UPDATED_USER_BALANCE",
    payload: data
  }
}

const updatingUserBalance = (userObject) => {
  let token = localStorage.getItem('token')
  return dispatch => {
    fetch(`${URL}/users/${userObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authentication" : `Bearer ${token}`
      },
      body: JSON.stringify(userObject)
    })
      .then(res => res.json())
      .then(data => dispatch(updatedUserBalance(data)))
  }
}

const updatingRecipientBalance = (userObject) => {
  let token = localStorage.getItem('token')
  return dispatch => {
    fetch(`${URL}/users/${userObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authentication" : `Bearer ${token}`
      },
      body: JSON.stringify(userObject)
    })
  }
}

export { updatingUserBalance, updatingRecipientBalance };

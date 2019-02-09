const URL = 'http://localhost:3001/api/v1'
// const URL = 'https://project-bankroll-backend.herokuapp.com/api/v1'

const postedTransaction = (data) => {
  return {
    type:"POSTED_TRANSACTION",
    payload: data
  }
}

const postingTransaction = (userObject) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    fetch(`${URL}/transactions`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authentication" : `Bearer ${token}`
      },
      body: JSON.stringify(userObject)
    })
    .then(res => res.json())
    .then(data => {
      debugger
      dispatch(postedTransaction(data))
    })
  }
}

export { postingTransaction}

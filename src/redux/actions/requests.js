
const completedTransaction = (data) => {
  return {
    type:"COMPLETED_TRANSACTION",
    payload: data
  }
}

const completingTransaction = (userObject) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/transactions", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authentication" : `Bearer ${token}`
      },
      body: JSON.stringify(userObject)
    })
    .then(res => res.json())
    .then(data => {
      dispatch(completedTransaction(data))
    })
  }
}



export { completingTransaction };

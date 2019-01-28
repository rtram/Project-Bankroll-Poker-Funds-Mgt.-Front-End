const postedRequest = (data) => {
  return {
    type:"POSTED_REQUEST",
    payload: data
  }
}

const postingRequest = (requestObject) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/requests", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authentication" : `Bearer ${token}`
      },
      body: JSON.stringify(requestObject)
    })
    .then(res => res.json())
    .then(data => {
      dispatch(postedRequest(data))
    })
  }
}

const completedTransaction = (data) => {
  return {
    type:"COMPLETED_TRANSACTION",
    payload: data
  }
}

const completingTransaction = (transactionObject, requestObject) => {
  let token = localStorage.getItem('token')
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/transactions", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authentication" : `Bearer ${token}`
      },
      body: JSON.stringify(transactionObject)
    })
    .then(res => res.json())
    .then(data => {
      dispatch(completedTransaction(data))
    })
    dispatch(deletingRequest(requestObject))
  }
}

const deletedRequest = data => {
  return {
    type: 'DELETED_REQUEST',
    payload: data
  };
}

const deletingRequest = requestObject => {
  let token = localStorage.getItem('token')
  return dispatch => {
    dispatch(deletedRequest(requestObject))
    fetch(`http://localhost:3001/api/v1/requests/${requestObject.id}`, {
      method: "DELETE",
      headers: {
        "Authentication" : `Bearer ${token}`
      }
    })
  }
}


export { completingTransaction, deletingRequest, postingRequest };

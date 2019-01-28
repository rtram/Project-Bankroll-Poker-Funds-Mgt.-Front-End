import { combineReducers } from 'redux'

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "LOADING":
      return true
    case "FETCHED_SESSIONS":
      return false;
    default:
      return state
  }
}

const currentUserReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOGGED_IN':
      return action.payload.user
    default:
      return state
  }
}

const userReducer = (state = {}, action) => {
  let userObject;
  switch(action.type) {
    case 'CREATED_USER':
       userObject= {
        username: action.payload.username,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        url: action.payload.url
      }
      return userObject
    case 'FETCHED_USER_DATA':
      userObject = {
        username: action.payload.username,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        url: action.payload.url
      }
      return userObject
    default:
      return state
  }
}

const sessionsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_SESSIONS':
      return action.payload
    case 'POST_SESSION':
      return [...state, action.payload]
    case 'UPDATED_SESSION':
      let originalSession = state.find(session => session.id === action.payload.id)
      let index = state.indexOf(originalSession)
      let sessionCopy = [...state]
      sessionCopy.splice(index, 1, action.payload)
      return sessionCopy
    case 'DELETED_SESSION':
      originalSession = state.find(session => session.id === action.payload.id)
      index = state.indexOf(originalSession)
      sessionCopy = [...state]
      sessionCopy.splice(index, 1)
      return sessionCopy
    default:
      return state
  }
}

const balanceReducer = (state = 0, action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.payload.balance
    case 'UPDATED_USER_BALANCE':
      return action.payload
    default:
      return state
  }
}

const sentTransactionsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.payload.sent_transactions
    case 'POSTED_TRANSACTION':
      return [...state, action.payload]
    case 'COMPLETED_TRANSACTION':
      return [...state, action.payload]
    case 'POSTED_LIKE':
      let originalTransaction = state.filter(transactionObject => transactionObject.id === action.payload.id)
      let index = state.indexOf(originalTransaction[0])
      if (index !== -1) {
        let copyState = state.slice()
        copyState.splice(index, 1, action.payload)
        return copyState
      } else {
        return state
      }
    case 'DELETED_LIKE':
      originalTransaction = state.filter(transactionObject => transactionObject.id === action.payload.id)
      index = state.indexOf(originalTransaction[0])
      if (index !== -1) {
        let copyState = state.slice()
        copyState.splice(index, 1, action.payload)
        return copyState
      } else {
        return state
      }
    default:
      return state
  }
}

const receivedTransactionsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.payload.received_transactions
    case 'POSTED_LIKE':
      let originalTransaction = state.filter(transactionObject => transactionObject.id === action.payload.id)
      let index = state.indexOf(originalTransaction[0])
      if (index !== -1) {
        let copyState = state.slice()
        copyState.splice(index, 1, action.payload)
        return copyState
      } else {
        return state
      }
    case 'DELETED_LIKE':
      originalTransaction = state.filter(transactionObject => transactionObject.id === action.payload.id)
      index = state.indexOf(originalTransaction[0])
      if (index !== -1) {
        let copyState = state.slice()
        copyState.splice(index, 1, action.payload)
        return copyState
      } else {
        return state
      }
    default:
      return state
  }
}

const sentRequestsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.payload.sent_requests
    case "POSTED_REQUEST":
      return [...state, action.payload]
    case 'DELETED_REQUEST':
      let originalRequest = state.find(request => request.id === action.payload.id)
      if (originalRequest !== undefined) {
        let index = state.indexOf(originalRequest)
        let requestCopy = [...state]
        requestCopy.splice(index, 1)
        return requestCopy
      } else {
        return state
      }
    default:
      return state
  }
}

const receivedRequestsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.payload.received_requests
    case 'FETCHED_USER_INBOX':
      return action.payload
    case 'DELETED_REQUEST':
      let originalRequest = state.find(request => request.id === action.payload.id)
      if (originalRequest !== undefined) {
        let index = state.indexOf(originalRequest)
        let requestCopy = [...state]
        requestCopy.splice(index, 1)
        return requestCopy
      } else {
        return state
      }
    default:
      return state
  }
}

const userListReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_LIST':
      return action.payload
    default:
      return state
  }
}

const errorsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'DISPLAY_ERRORS':
      return action.payload
    default:
      return state
  }
}

const loginErrorReducer = (state = [], action) => {
  switch(action.type) {
    case 'DISPLAY_LOGIN_ERROR':
      return [action.payload]
    default:
      return state
  }
}

const sessionErrorReducer = (state = [], action) => {
  switch(action.type) {
    case 'DISPLAY_SESSION_ERRORS':
      return action.payload
    default:
      return state
  }
}

const selectedProfileReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_SELECTED_PROFILE":
      return [action.payload]
    case "CLEAR_SELECTED_PROFILE":
      return []
    case 'POSTED_TRANSACTION':
      let stateCopy = [{...state[0], received_transactions: [...state[0].received_transactions, action.payload]}]
      return stateCopy
    case 'POSTED_LIKE':
      if (state.length > 0) {
        let originalReceivedTransaction = state[0].received_transactions.filter(transactionObject => transactionObject.id === action.payload.id)
        let originalSentTransaction = state[0].sent_transactions.filter(transactionObject => transactionObject.id === action.payload.id)

        if (originalReceivedTransaction.length > 0) {
          let index = state[0].received_transactions.indexOf(originalReceivedTransaction[0])
          let copyReceivedTransactionState = state[0].received_transactions.slice()
          copyReceivedTransactionState.splice(index, 1, action.payload)
          stateCopy = [{...state[0], received_transactions: [...copyReceivedTransactionState]}]
        } else {
          let index = state[0].sent_transactions.indexOf(originalSentTransaction[0])
          let copySentTransactionState = state[0].sent_transactions.slice()
          copySentTransactionState.splice(index, 1, action.payload)
          stateCopy = [{...state[0], sent_transactions: [...copySentTransactionState]}]
        }
        return stateCopy
      } else {
        return state
      }
    case 'DELETED_LIKE':
      if (state.length > 0) {
        let originalReceivedTransaction = state[0].received_transactions.filter(transactionObject => transactionObject.id === action.payload.id)
        let originalSentTransaction = state[0].sent_transactions.filter(transactionObject => transactionObject.id === action.payload.id)

        if (originalReceivedTransaction.length > 0) {
          let index = state[0].received_transactions.indexOf(originalReceivedTransaction[0])
          let copyReceivedTransactionState = state[0].received_transactions.slice()
          copyReceivedTransactionState.splice(index, 1, action.payload)
          stateCopy = [{...state[0], received_transactions: [...copyReceivedTransactionState]}]
        } else {
          let index = state[0].sent_transactions.indexOf(originalSentTransaction[0])
          let copySentTransactionState = state[0].sent_transactions.slice()
          copySentTransactionState.splice(index, 1, action.payload)
          stateCopy = [{...state[0], sent_transactions: [...copySentTransactionState]}]
        }
        return stateCopy
      } else {
        return state
      }
    default:
      return state
  }
}

const appReducer = combineReducers({
  loading: loadingReducer,
  currentUser: currentUserReducer,
  user: userReducer,
  sessions: sessionsReducer,
  balance: balanceReducer,
  sent_transactions: sentTransactionsReducer,
  received_transactions: receivedTransactionsReducer,
  sent_requests: sentRequestsReducer,
  received_requests: receivedRequestsReducer,
  userList: userListReducer,
  errors: errorsReducer,
  loginError: loginErrorReducer,
  sessionError: sessionErrorReducer,
  selectedProfile: selectedProfileReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT'){
    localStorage.clear()
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;

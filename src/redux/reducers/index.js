import { combineReducers } from 'redux'

const userListReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_LIST':
      return action.payload
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

const userReducer = (state = {}, action) => {
  let userObject;
  switch(action.type) {
    case 'CREATED_USER':
       userObject= {
        username: action.payload.username,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name
      }
      return userObject
    case 'FETCHED_USER_DATA':
      userObject = {
        username: action.payload.username,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name
      }
      return userObject
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
    default:
      return state
  }
}

const receivedTransactionsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.payload.received_transactions
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

const selectedProfileReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCHED_SELECTED_PROFILE":
      return [action.payload]
    case "CLEAR_SELECTED_PROFILE":
      return []
    case 'POSTED_TRANSACTION':
      let stateCopy = [{...state[0], received_transactions: [...state[0].received_transactions, action.payload]}]
      return stateCopy
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

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  sessions: sessionsReducer,
  balance: balanceReducer,
  user: userReducer,
  sent_transactions: sentTransactionsReducer,
  received_transactions: receivedTransactionsReducer,
  userList: userListReducer,
  errors: errorsReducer,
  loginError: loginErrorReducer,
  selectedProfile: selectedProfileReducer
});

export default rootReducer;

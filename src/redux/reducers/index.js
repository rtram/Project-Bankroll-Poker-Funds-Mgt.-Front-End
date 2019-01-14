import { combineReducers } from 'redux'

const userReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.data
    case 'POST_SESSION':
      return {...state, sessions:[...state.sessions, action.payload]}
    case 'UPDATED_SESSION':
      let originalSession = state.sessions.find(session => session.id === action.payload.id)
      let index = state.sessions.indexOf(originalSession)
      let sessionCopy = [...state.sessions]
      sessionCopy.splice(index, 1, action.payload)
      return {...state, sessions:[...sessionCopy]}
    case 'DELETED_SESSION':
      originalSession = state.sessions.find(session => session.id === action.payload.id)
      index = state.sessions.indexOf(originalSession)
      sessionCopy = [...state.sessions]
      sessionCopy.splice(index, 1)
      return {...state, sessions:[...sessionCopy]}
    case 'UPDATED_USER_BALANCE':
      return {...state, balance: action.payload.balance}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

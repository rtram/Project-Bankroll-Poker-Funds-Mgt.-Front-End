import { combineReducers } from 'redux'

const userReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.data
    case 'POST_SESSION':
      return {...state, sessions:[...state.sessions, action.payload]}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;

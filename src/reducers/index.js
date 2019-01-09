import { combineReducers } from 'redux'

const userReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.user
    default:
      return state
  }
}

const rootReducer = combineReducers({
  users: userReducer,

});

export default rootReducer;

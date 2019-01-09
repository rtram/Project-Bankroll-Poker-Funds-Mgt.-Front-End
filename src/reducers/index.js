import { combineReducers } from 'redux'

const userReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCHED_USER_DATA':
      return action.data
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: userReducer,

});

export default rootReducer;

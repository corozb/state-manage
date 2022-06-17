import { combineReducers } from 'redux'
import { cakeReducer, iceCreamReducer } from '../redux'
import reducer from '../redux/user/userReducer'

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: reducer,
})

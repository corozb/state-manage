import { combineReducers } from 'redux'
import game_shop from './gameShopReducer'
import searcher from './searchReducer'

const rootReducer = combineReducers({
  game_shop,
  searcher,
})

export default rootReducer

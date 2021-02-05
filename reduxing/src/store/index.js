import { createStore, combineReducers } from 'redux'
import wordReducer from './Word/reducer'

const reducers = combineReducers({
  wordReducer,
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

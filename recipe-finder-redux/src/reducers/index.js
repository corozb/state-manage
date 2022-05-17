import { combineReducers } from "redux";
import { recipesReducer } from './recipesReducer'
import {favoriteReducer} from './favoritesReducer'

const rootReducer = combineReducers({
  recipes: recipesReducer,
  favoriteRecipes: favoriteReducer
})

export default rootReducer
import {SET_RECIPES, FAVORITES_RECIPE} from '../types'

export const setRecipes  = (items) => (
  {
    type: SET_RECIPES,
    payload: items
  }
)

export const favoriteRecipe  = (recipe) => (
  {
    type: FAVORITES_RECIPE,
    payload: recipe
  }
)
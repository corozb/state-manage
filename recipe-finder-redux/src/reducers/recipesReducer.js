import { SET_RECIPES } from "../types"

export const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_RECIPES:
      return action.payload

    default:
      return state
  }
}
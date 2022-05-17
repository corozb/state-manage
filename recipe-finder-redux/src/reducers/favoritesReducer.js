import { FAVORITES_RECIPE } from "../types"

  export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case FAVORITES_RECIPE:
      state = [...state, action.payload]
      return state
    
    default:
      return state
  }
}

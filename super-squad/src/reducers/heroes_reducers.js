import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'
import { createCharacter } from '../utils/helpers'

function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)]
      return heroes 
    
    case REMOVE_CHARACTER:
      let heroesItem = state.filter(item => item.id !== action.id)
      return heroesItem

    default:
      return state
  }
}



export default heroes
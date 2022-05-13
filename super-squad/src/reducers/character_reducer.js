import initialState from '../utils/data.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from '../utils/helpers';


function characters(state = initialState, action) {
  switch(action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;

    case REMOVE_CHARACTER:
      let charactersItems = [...state, createCharacter(action.id)];
      return charactersItems;
      
    default:
      return state;
  }
}

export default characters;
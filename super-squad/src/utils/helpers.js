import initialState from '../utils/data.json'

export const createCharacter = (id) => {
  let character = initialState.find(item => item.id === id)
  return character
}
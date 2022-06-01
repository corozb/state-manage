import Axios from 'axios'

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST'
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE'

// Actions
export const fetchPokemonRequest = () => ({
  type: FETCH_POKEMON_REQUEST,
})

export const fetchPokemonSuccess = (Pokemon) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: Pokemon,
})

export const fetchPokemonFailure = (error) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: error,
})

const fetchPokemon = (value) => {
  return (dispatch) => {
    dispatch(fetchPokemonRequest(value))
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((response) => {
        dispatch(fetchPokemonSuccess([response.data]))
      })
      .catch(() => {
        dispatch(fetchPokemonFailure('No found any pokemon'))
      })
  }
}

export default fetchPokemon

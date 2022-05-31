const createStore = require("redux").createStore;
const combineReducers = require("redux").combineReducers;

// Actions
const BUY_POKEMON = 'BUY_POKEMON'
const BUY_SWITCH = 'BUY_SWITCH'
const RETURN_POKEMON = 'RETURN_POKEMON'

const buy_pokemon_action = (cant) => ({
  type: BUY_POKEMON,
  payload: cant
})

const buy_switch_action = (cant) => ({
  type: BUY_SWITCH,
  payload: cant
})

const buy_general_action = (type, cant) => ({
  type,
  payload: cant
})

const return_pokemon_action = (cant) => ({
  type: RETURN_POKEMON,
  payload: cant
})

// Reducers
const default_games_state = {
  pokemon: 10,
  yoshi: 10
}

const games_reducer = (state = default_games_state, action) => {
  switch (action.type) {
    case BUY_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon - action.payload
      }
    
    case RETURN_POKEMON:
      return {
        ...state,
        pokemon: state.pokemon + action.payload
      }
    
    default:
      return state
  }
}

const default_consoles_state = {
  ps5: 3900,
  switch: 30
}


const consoles_reducer = (state = default_consoles_state, action) => {
  switch (action.type) {
    case BUY_SWITCH:
      return {
        ...state,
        switch: state.switch - action.payload
      }
    
    default:
      return state
  }
}

const rootReducer = combineReducers({
  games: games_reducer,
  consoles: consoles_reducer
})

// Store
const store = createStore(rootReducer)
console.log('Estado Inicial', store.getState())
store.subscribe(() => {
  console.log('cambio de estado: ', store.getState())
})
store.dispatch(buy_pokemon_action(4))
store.dispatch(buy_switch_action(4))
store.dispatch(return_pokemon_action(2))
store.dispatch(buy_general_action(BUY_POKEMON, 5))
store.dispatch(buy_general_action(BUY_SWITCH, 15))
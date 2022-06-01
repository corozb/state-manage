export const BUY_POKEMON = 'BUY_POKEMON'
export const RETURN_POKEMON = 'RETURN_POKEMON'

export const buy_pokemon_action = (cant) => ({
  type: BUY_POKEMON,
  payload: cant,
})

export const return_pokemon_action = (cant) => ({
  type: RETURN_POKEMON,
  payload: cant,
})

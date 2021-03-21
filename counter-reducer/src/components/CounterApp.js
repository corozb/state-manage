import { useReducer } from 'react'

const TYPES = {
  INCREMENT: 'increment',
  DECREMET: 'decrement',
  RESET: 'reset',
}

const initialState = 10

const init = (value) => {
  return value + 1
}

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return state + 1

    case TYPES.DECREMET:
      return state - 1

    case TYPES.RESET:
      return init(initialState)

    default:
      return state
  }
}

const CounterApp = () => {
  const [counter, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>Click: {counter}</h1>
      <button onClick={() => dispatch({ type: TYPES.INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: TYPES.DECREMET })}>Decrement</button>
      <button onClick={() => dispatch({ type: TYPES.RESET })}>Reset</button>
    </>
  )
}

export default CounterApp

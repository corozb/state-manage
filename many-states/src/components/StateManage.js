import {useReducer} from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'


const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': 
        return {
          counter: state.counter + state.step,
          step: state.step 
        } 
    
    case 'decrement': 
        return {
          counter: state.counter - state.step,
          step: state.step 
        } 
    
    case 'reset': 
        return {
          counter: 0,
          step: state.step 
        }

    case 'updateStep': 
        return {
          counter: state.counter,
          step: action.step 
        } 

    default: 
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { counter: 0, step: 1})

  console.log('counter', state.counter)
  return (
    <>
      <Link to='/'>Back</Link>
      <Slider min={1} max={10} onChange={(value) => dispatch({
        type: 'updateStep',
        step: value
      })}/>
      <h1>Counter: {state.counter}</h1>
      <button onClick={()=> dispatch({type: 'increment'})}>+</button>
      <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
      <button onClick={()=> dispatch({type: 'reset'})}>reset</button>
    </>
  )
}

export default App;

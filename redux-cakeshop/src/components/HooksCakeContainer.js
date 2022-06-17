// HOOKS
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  const [number, setNumber] = useState(1)

  return (
    <div>
      <h1>Hooks Container</h1>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cakes</button>
    </div>
  )
}

export default HooksCakeContainer

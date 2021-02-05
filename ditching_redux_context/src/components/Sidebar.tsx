import React, { useContext } from 'react'
// import { StateContext } from '../App'
import { StateContextuseReducer } from '../reducer/state'

const Sidebar = () => {
  // const context = useContext(StateContext)
  const { state } = useContext(StateContextuseReducer)

  return (
    <aside>
      <h2>Wow this is a nice sidebar</h2>
      <p>See my logo</p>
      <img src={`https://codedamn.com/assets/images/${state.logo}.png`} alt='' />
      <img alt='' />
    </aside>
  )
}

export default Sidebar

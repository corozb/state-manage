import React, { useContext } from 'react'
// import { StateContext } from '../App'
import { StateContextuseReducer } from '../reducer/state'

function Footer() {
  // const context = useContext(StateContext)
  const { state } = useContext(StateContextuseReducer)

  return (
    <footer>
      <img src={`https://codedamn.com/assets/images/${state.logo}.png`} alt='' />
      <p>Copyright &copy; Me.</p>
    </footer>
  )
}

export default Footer

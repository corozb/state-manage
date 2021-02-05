import React, { useContext } from 'react'

// import { StateContext } from '../App'
import { StateContextuseReducer } from '../reducer/state'

const Header: React.FC = () => {
  // const context = useContext(StateContext)
  const { state, dispatch } = useContext(StateContextuseReducer)

  const changeName = () => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: Math.random().toString(),
    })
  }

  return (
    <header>
      <h1>Welcome to my Site!</h1>
      {/* <p>Hello {state.name}</p> */}
      <p onClick={changeName}>Hello {state.name}</p>
    </header>
  )
}

export default Header

import React, { useContext } from 'react'
// import { StateContext } from '../App'
import { StateContextuseReducer } from '../reducer/state'

const RightArticle: React.FC = () => {
  // const context = useContext(StateContext)
  const { state, dispatch } = useContext(StateContextuseReducer)

  console.log(state)

  // return (
  //   <article>
  //     <h2>This is my site!</h2>
  //     <p>It is very nive</p>
  //     <p>The mode right now is: {contex.theme}</p>
  //     <button onClick={() => context.changeTheme(context.theme === 'dark' ? 'light' : 'dark')}>
  //       Click here to turn on dark mode
  //     </button>
  //   </article>
  // )

  const toogleTheme = () => {
    if (state.theme === 'dark') {
      dispatch({ type: 'SET_THEME', payload: 'light' })
    } else {
      dispatch({ type: 'SET_THEME', payload: 'dark' })
    }
  }

  return (
    <article>
      <h2>This is my site!</h2>
      <p>It is very nive</p>
      <p>The mode right now is: {state.theme}</p>
      <button onClick={toogleTheme}>Click here to turn on dark mode</button>
    </article>
  )
}

export default RightArticle

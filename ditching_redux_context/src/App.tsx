import React, { useState, createContext, useReducer } from 'react'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'

// type Context = {
//   theme: string
//   changeTheme(value: string): void
//   name: string
//   logo: string
// }

// export const StateContext = createContext<Context>({
//   theme: 'light',
//   changeTheme: () => 0,
//   name: '',
//   logo: '',
// })

// const App: React.FC = () => {
//   const [theme, setTheme] = useState<string>('light')

// Just context
// return (
//   <StateContext.Provider
//     value={{
//       theme,
//       changeTheme: function (value: string) {
//         document.body.classList.remove('dark', 'light')
//         document.body.classList.add(value)
//         setTheme(value)
//       },
//       name: 'Cristian',
//       get logo() {
//         return this.theme === 'dark' ? 'white-logo' : 'red-logo'
//       },
//     }}
//   >
//     <Header />
//     <Content />
//     <Footer />
//   </StateContext.Provider>
// )

// also useReducer
import { stateReducer, defaultState, Provider } from './reducer/state'

const App: React.FC = () => {
  const [state, dispatch] = useReducer(stateReducer, defaultState)

  return (
    <Provider value={{ state, dispatch }}>
      <Header />
      <Content />
      <Footer />
    </Provider>
  )
}

export default App

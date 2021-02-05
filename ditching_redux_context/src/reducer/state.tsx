import { createContext } from 'react'

type Context = {
  name: string
  theme: string
  logo: string
}

const initialState = {
  name: 'Cristian',
  theme: 'light',
  logo: 'red-logo',
}

// we can use it in the main file with useReducer
export const stateReducer = (state: Context, action: { type: string; payload: string }) => {
  switch (action.type) {
    case 'SET_THEME':
      document.body.classList.remove('dark', 'light')
      document.body.classList.add(action.payload)
      return {
        ...state,
        theme: action.payload,
        logo: action.payload === 'dark' ? 'white-logo' : 'red-logo',
      }

    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      }
  }

  return initialState
}

//to pass down state and dispatcher
export const StateContextuseReducer = createContext<{ state: Context; dispatch: Function }>({
  state: initialState,
  dispatch: () => 0,
})

export const Provider = StateContextuseReducer.Provider
// export const context = StateContextuseReducer // useContext
export const defaultState = initialState // useContext

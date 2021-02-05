import { useReducer } from 'react'
import { UserReducer } from './reducer/user.reducer'
import UserContext from './user.context'

const UserProvider = ({ children }) => {
  const initialState = {
    avatar: 'https://i.pinimg.com/originals/99/c2/a8/99c2a8163164404daa8aa214d7108f0d.jpg',
    name: 'Vanilla Script',
    position: 'Web UI Developer SSr',
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>
}

export default UserProvider

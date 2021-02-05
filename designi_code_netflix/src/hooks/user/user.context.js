import { createContext } from 'react'

const UserContext = createContext({
  avatar: '',
  name: '',
  position: '',
})

export default UserContext

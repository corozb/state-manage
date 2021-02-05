import { createContext } from 'react'

const LayoutContext = createContext({
  show: false,
  logo: '',
  onShowHide: () => {},
})

export default LayoutContext

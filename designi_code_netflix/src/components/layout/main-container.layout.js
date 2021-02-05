import React, { useContext } from 'react'
import LayoutContext from '../../hooks/layout/layout.context'

const MainContainer = ({ children }) => {
  const { show } = useContext(LayoutContext)
  const classContainer = show ? 'dsc-main-container' : 'dsc-main-container-full'

  return <section className={classContainer}>{children}</section>
}

export default MainContainer

import { useContext } from 'react'

import BrandSideBar from './BrandSideBar'
import UserNavBar from './UserNavBar'
import MenuSideBar from './MenuSideBar'

import { SIDEBAR_ITEMS } from './constants/Contants'
import LayoutContext from '../../../hooks/layout/layout.context'
import UserContext from '../../../hooks/user/user.context'

const SideBar = () => {
  const layouts = useContext(LayoutContext)
  const users = useContext(UserContext)
  const { show } = layouts

  return (
    <>
      {show && (
        <nav className='dsc-left-nav'>
          <BrandSideBar props={layouts} />
          <UserNavBar users={users} />
          {SIDEBAR_ITEMS.map((item, i) => (
            <MenuSideBar props={{ menu: item }} key={i} />
          ))}
        </nav>
      )}
    </>
  )
}

export default SideBar

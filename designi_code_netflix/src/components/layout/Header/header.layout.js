import { useContext } from 'react'
import LayoutContext from '../../../hooks/layout/layout.context'
import UserContext from '../../../hooks/user/user.context'
import BrandHeader from './BrandHeader'
import SubmenuHeader from './SubmenuHeader'

const Header = () => {
  const layouts = useContext(LayoutContext)
  const users = useContext(UserContext)

  return (
    <header className='dsc-header'>
      <BrandHeader props={layouts} />
      <SubmenuHeader users={users} />
    </header>
  )
}

export default Header

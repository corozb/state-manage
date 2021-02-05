import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faComment } from '@fortawesome/free-solid-svg-icons'

const SubmenuHeader = ({ users }) => {
  return (
    <div className='dsc-header__submenu'>
      <FontAwesomeIcon icon={faBell} className='dsc-header__submenu-icon' />
      <FontAwesomeIcon icon={faComment} className='dsc-header__submenu-icon' />
      <img className='dsc-header__submenu-usr' src={users.avatar} alt='logo' />
    </div>
  )
}

export default SubmenuHeader

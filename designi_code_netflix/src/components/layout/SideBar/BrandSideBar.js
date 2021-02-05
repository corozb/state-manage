import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BrandSideBar = ({ props }) => {
  const { onShowHide, logo } = props

  return (
    <div className='dsc-left-nav-brand' onClick={onShowHide}>
      <FontAwesomeIcon icon={faBars} className='dsc-left-nav-brand__menu' />
      <div className='dsc-left-nav-brand__logo'>
        <img src={logo} alt='logo netflix' />
        <span>etflix</span>
      </div>
    </div>
  )
}

export default BrandSideBar

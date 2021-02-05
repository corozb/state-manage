import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const BrandHeader = ({ props }) => {
  const { onShowHide, logo } = props

  return (
    <div className='dsc-header__brand' onClick={onShowHide}>
      <FontAwesomeIcon icon={faBars} className='dsc-header__brand-menu' />
      <div className='dsc-header__brand-logo'>
        <img src={logo} alt='netflix logo' />
        <span>eflix</span>
      </div>
    </div>
  )
}

export default BrandHeader

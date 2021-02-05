import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const MenuSideBar = ({ props }) => {
  const { menu } = props

  return (
    <div className='dsc-left-nav-menu'>
      <h5 className='dsc-left-nav-menu__title'>{menu.title}</h5>
      <ul className='dsc-left-nav-menu__links'>
        {menu.links.map((link, i) => {
          const toGo = link.link ? link.link : '/'

          return (
            <Link to={toGo}>
              <li className='dsc-left-nav-menu__links-link' key={i}>
                <FontAwesomeIcon icon={link.icon} />
                <span>{link.name}</span>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuSideBar

import Chevron from '../assets/chevron.svg'
import {
  faUserDoctor,
  faUserTie,
  faDiagramProject,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './styles/Navbar.css'

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false)

  const Open = () => {
    setIsOpened(!isOpened)
    document.querySelector('.navbar').classList.toggle('opened')
    document.querySelector('.navbarOpener').classList.toggle('opened')
    document.querySelector('#chevronLogo').classList.toggle('opened')
  }

  return (
    <div className='navbar'>
      <div className='navbarOpener' onClick={() => Open()}>
        <img src={Chevron} alt='chevron' id='chevronLogo' />
      </div>
      <div className='navbarLinksContainer'></div>
      <ul className='navbarLinksWrapper'>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }
        >
          <FontAwesomeIcon
            icon={faDiagramProject}
            style={{ fontSize: '30px' }}
          />

          <span className={isOpened ? 'namesDisplayed' : 'navbarLinkName'}>
            Projects
          </span>
        </NavLink>
        <NavLink
          to='/clients'
          className={({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }
        >
          <FontAwesomeIcon icon={faUserTie} style={{ fontSize: '30px' }} />

          <span className={isOpened ? 'namesDisplayed' : 'navbarLinkName'}>
            Clients
          </span>
        </NavLink>
        <NavLink
          to='/experts'
          className={({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }
        >
          <FontAwesomeIcon icon={faUserDoctor} style={{ fontSize: '30px' }} />

          <span className={isOpened ? 'namesDisplayed' : 'navbarLinkName'}>
            Experts
          </span>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar

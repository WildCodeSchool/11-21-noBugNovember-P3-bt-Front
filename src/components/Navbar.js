import Chevron from '../assets/chevron.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserDoctor,
  faUserTie,
  faDiagramProject,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false)
  let navigate = useNavigate()

  const Open = () => {
    setIsOpened(!isOpened)
    document.querySelector('.navbar').classList.toggle('opened')
    document.querySelector('.navbarOpener').classList.toggle('opened')
    document.querySelector('#chevronLogo').classList.toggle('opened')
  }

  const disconnect = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload()
  }

  // const Logout = () => {
  //   setUser({ email: '', password: '' })
  // }
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
            // className="navbarLinkLogo"
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
          <FontAwesomeIcon
            icon={faUserTie}
            // className="navbarLinkLogo"
            style={{ fontSize: '30px' }}
          />

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
          <FontAwesomeIcon
            icon={faUserDoctor}
            // className="navbarLinkLogo"
            // size="xl"
            style={{ fontSize: '30px' }}
          />

          <span className={isOpened ? 'namesDisplayed' : 'navbarLinkName'}>
            Experts
          </span>
        </NavLink>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }
        >
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            // className="navbarLinkLogo"
            // size="xl"
            style={{ fontSize: '30px' }}
            onClick={disconnect}
          />
          {/* <img src={experts} alt="expertLogo" className="navbarLinkLogo" /> */}
          <span className={isOpened ? 'namesDisplayed' : 'navbarLinkName'}>
            Exit
          </span>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar

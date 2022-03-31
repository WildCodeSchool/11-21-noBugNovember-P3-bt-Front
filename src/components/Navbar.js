import Chevron from '../assets/chevron.svg'
// import client from "../assets/client.png";
// import avatar from "../assets/avatar.png";
// import avatar2 from "../assets/avatar2.svg";
// import deal from "../assets/deal.png";
// import experts from "../assets/experts.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserDoctor,
  faUserTie,
  faDiagramProject,
} from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navbar.css'

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false)

  const Open = () => {
    setIsOpened(!isOpened)
    document.querySelector('.navbar').classList.toggle('opened')
    document.querySelector('.navbarOpener').classList.toggle('opened')
    document.querySelector('#chevronLogo').classList.toggle('opened')
  }

  const disconnect = () => {
    localStorage.clear()
    window.location.reload()
  }

  // const Logout = () => {
  //   setUser({ email: '', password: '' })
  // }
  return (
    <div
      className='navbar'
      // onMouseEnter={() => open()}
      // onMouseLeave={() => close()}
    >
      <div className='navbarOpener' onClick={() => Open()}>
        <img src={Chevron} alt='chevron' id='chevronLogo' />
      </div>
      <div className='navbarLinksContainer'></div>
      <ul className='navbarLinksWrapper'>
        {/* <NavLink
          to="/user"
          className={({ isActive }) =>
            isActive ? "navbarLink activeLink" : "navbarLink"
          }
        >
          <img src={avatar2} className="navbarLinkLogo" />
          <span className={isOpened ? "namesDisplayed" : "navbarLinkName"}>
            Alexis{" "}
          </span>
        </NavLink> */}
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
          {/* <img src={deal} alt="projectLogo" className="navbarLinkLogo" /> */}
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

          {/* <img src={client} alt="clientLogo" className="navbarLinkLogo" /> */}
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
          {/* <img src={experts} alt="expertLogo" className="navbarLinkLogo" /> */}
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
          <button onClick={disconnect}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              enable-background='new 0 0 24 24'
              height='36px'
              viewBox='0 0 24 24'
              width='36px'
              fill='rgba(114, 127, 199, 1)'
              color='rgba(114, 127, 199, 1)'
            >
              <g>
                <path d='M0,0h24v24H0V0z' fill='none' />
              </g>
              <g>
                <path d='M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z' />
              </g>
            </svg>
          </button>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar

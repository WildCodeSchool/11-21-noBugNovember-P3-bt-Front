import Chevron from '../assets/chevron.svg'
import Client from '../assets/client.png'
import Expert from '../assets/expert.png'
import Project from '../assets/project.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navbar.css'
import uuserbth from '../assets/uuserbth.png'

const Navbar = (props) => {
  const open = () => {
    props.setIsOpened(true)
    document.querySelector('.navbar').classList.toggle('opened')
    document.querySelector('.navbarOpener').classList.toggle('opened')
    document.querySelector('#chevronLogo').classList.toggle('opened')
  }

  const close = () => {
    props.setIsOpened(false)
    document.querySelector('.navbar').classList.toggle('opened')
    document.querySelector('.navbarOpener').classList.toggle('opened')
    document.querySelector('#chevronLogo').classList.toggle('opened')
  }

  return (
    <div
      className='navbar'
      onMouseEnter={() => open()}
      onMouseLeave={() => close()}
    >
      <div className='navbarOpener'>
        <img src={Chevron} alt='chevron' id='chevronLogo' />
      </div>
      <div className='navbarLinksContainer'></div>
      <ul className='navbarLinksWrapper'>
        <div className='logoContainer'>
          {({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }

          <img className='userLogo' src={uuserbth} alt='userLogo' />
          <span
            className={props.isOpened ? 'namesDisplayed' : 'navbarLinkName'}
          >
            Alexis
          </span>
        </div>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }
        >
          <img src={Project} alt='projectLogo' className='navbarLinkLogo' />
          <span
            className={props.isOpened ? 'namesDisplayed' : 'navbarLinkName'}
          >
            Projects
          </span>
        </NavLink>
        <NavLink
          to='/clients'
          className={({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }
        >
          <img src={Client} alt='clientLogo' className='navbarLinkLogo' />
          <span
            className={props.isOpened ? 'namesDisplayed' : 'navbarLinkName'}
          >
            Clients
          </span>
        </NavLink>
        <NavLink
          to='/experts'
          className={({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }
        >
          <img src={Expert} alt='expertLogo' className='navbarLinkLogo' />
          <span
            className={props.isOpened ? 'namesDisplayed' : 'navbarLinkName'}
          >
            Experts
          </span>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar

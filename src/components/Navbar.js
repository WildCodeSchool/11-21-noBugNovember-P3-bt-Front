import Chevron from '../assets/chevron.svg';
import client from '../assets/client.png';
import avatar from '../assets/avatar.png';
import deal from '../assets/deal.png';
import experts from '../assets/experts.png';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = (props) => {
  const open = () => {
    props.setIsOpened(true);
    document.querySelector('.navbar').classList.toggle('opened');
    document.querySelector('.navbarOpener').classList.toggle('opened');
    document.querySelector('#chevronLogo').classList.toggle('opened');
  };

  const close = () => {
    props.setIsOpened(false);
    document.querySelector('.navbar').classList.toggle('opened');
    document.querySelector('.navbarOpener').classList.toggle('opened');
    document.querySelector('#chevronLogo').classList.toggle('opened');
  };

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
        <NavLink
          to='/user'
          className={({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }
        >
          <img src={avatar} className='navbarLinkLogo' />
          <span
            className={props.isOpened ? 'namesDisplayed' : 'navbarLinkName'}
          >
            Alexis{' '}
          </span>
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'navbarLink activeLink' : 'navbarLink'
          }
        >
          <img src={deal} alt='projectLogo' className='navbarLinkLogo' />
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
          <img src={client} alt='clientLogo' className='navbarLinkLogo' />
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
          <img src={experts} alt='expertLogo' className='navbarLinkLogo' />
          <span
            className={props.isOpened ? 'namesDisplayed' : 'navbarLinkName'}
          >
            Experts
          </span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;

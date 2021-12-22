import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import './NavBar.css';
import menuicon from '../images/menu.png';

function NavMenuButtonMobile() {
  const [isMenuOpen, setMenuState] = useState(false);

  return (
    <div>
      <button onClick={() => setMenuState(true)} className='navbar-menu'>
        <img src={menuicon} alt='Menu' className='navbar-menu-icon' />
      </button>
      <Drawer variant="temporary" anchor='right' open={isMenuOpen} onClose={() => setMenuState(false)}>
        <a href='#home' className='nav-button' onClick={() => setMenuState(false)}>Home</a>
        <a href='#about' className='nav-button' onClick={() => setMenuState(false)}>About</a>
        <a href='#experience' className='nav-button' onClick={() => setMenuState(false)}>Experience</a>
        <a href='#projects' className='nav-button' onClick={() => setMenuState(false)}>Projects</a>
        <a href='#contact' className='nav-button' onClick={() => setMenuState(false)}>Contact</a>
      </Drawer>
    </div>
  )
}

function NavBar(props) {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar'>
        {/* <img src={logo} className="navbar-logo" alt="logo"/> */}
        <div className='navtitle'>
          <h3>le nguyen phong</h3>
        </div>
        <div className='navbuttons'>
          <a href='#home' className='nav-button'>Home</a>
          <a href='#about' className='nav-button'>About</a>
          <a href='#experience' className='nav-button'>Experience</a>
          <a href='#projects' className='nav-button'>Projects</a>
          <a href='#contact' className='nav-button'>Contact</a>
        </div>
        <NavMenuButtonMobile />
      </div>
    </div>
  );
}

export default NavBar;
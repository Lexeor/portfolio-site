import React from 'react';
import Logo from '../logo-console-green.png';

function Header() {
  return (
    <div className='header-container'>
        <img className='header-logo' src={Logo}></img>
        <div className='header-menu'><button className="btn btn-menu"><i class="ri-menu-fill"></i></button></div>
    </div>
  )
}

export default Header
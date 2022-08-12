import React from 'react';
import Logo from '../logo-console-green.png';
import useHover from '../hooks/useHover';
import {menuItems} from '../utils';
import NavMenuItem from '../components/NavMenuItem';

function Header() {
  const [hovered, btnMenu] = useHover();

  const NavMenuItemCollection = menuItems.map(item => {
    return <NavMenuItem key={item.name} name={item.name} path={item.path} />
  })

  return (
    <div className='container header'>
        <img className='header-logo' src={Logo}></img>
        <nav className='header-menu'>
          <ul>
            { NavMenuItemCollection }
          </ul>
          <button className={`btn btn-menu${hovered ? ' hovered' : ''}`} ref={btnMenu}><i className="ri-menu-fill"></i></button>
        </nav>
    </div>
  )
}

export default Header
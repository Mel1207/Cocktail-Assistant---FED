import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from '../assets/logo.png'
import IconMenuList from '../assets/icon-menu-list.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        <NavLink to="/" className='sidebar-logo-link'>
          <img src={NavLogo} alt="main logo" className='main-logo'/>
          <span>The Cocktail Assistant</span>
        </NavLink>
      </div>
      <div className='sidebar-links'>
        <NavLink to='/' className='sidebar-link'>
          <img src={IconMenuList} alt="Menu list" className='sidebar-link-icon'/>
          <span>Menu List</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
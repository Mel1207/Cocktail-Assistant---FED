import React from 'react'
import HamburgerMenu from '../assets/icon-hamburger-menu.svg'
import ProfileImg from '../assets/profile-image.jpg'
import IconLogOut from '../assets/icon-logout.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <button><img src={HamburgerMenu} alt="Hamburger menu" /></button>
      <div className='account-admin'>
        <div className='account'>
          <img src={ProfileImg} alt="Mel Pualon" className='account-image'/>
          <div>
            <p className='account-name'>Mel Pualon</p>
            <span className='account-role'>Admin</span>
          </div>
        </div>
        <div className='logout'>
          <img src={IconLogOut} alt="Logout" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
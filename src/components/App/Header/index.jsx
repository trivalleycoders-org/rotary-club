import React from 'react'
import AdminBtns from './AdminBtns'
import LoginBtn from './LoginBtn'
import './style.css'
 
const Header = () => (
  <div className='header' id='header'>
    <div className='nav-title'>
      <h3 className='header-title'>Job Tracker</h3>
    </div>
    {/* 
      AdminBtns will only show if admin logs in
      Log in btn will toggle to logoff
    */}  
    <div className='nav-btns'>
      <AdminBtns />
      <LoginBtn />
    </div>
  </div>  
)

export default Header

import React from 'react'
import './style.css'
 
const Header = () => (
  <div className='header' id='header'>
    <div className='nav-title'>
      <h3 className='header-title'>Job Tracker</h3>
    </div>
    <div className='nav-btns'>
      <button>Home</button>
      <button>Schedule</button>
      <button>Members</button>
    </div>
  </div>  
)

export default Header

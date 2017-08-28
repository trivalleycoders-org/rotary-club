import React from 'react'
import VolunteerRow from './VolunteerRow'
import './style.css'

const VolunteerList = () => (
  <div id='volunteerList' className='volunteerList'>
    <h1 className='title'>Volunteer List</h1>

    <button id='editVolunteerBtn'>Edit</button>
    
    <VolunteerRow />
  </div>    
)

export default VolunteerList

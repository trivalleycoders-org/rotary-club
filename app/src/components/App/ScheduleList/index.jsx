import React from 'react'
import ScheduleRow from './ScheduleRow'
import './style.css'

{/* edit button should only appear when admin is logged in */}

const ScheduleList = () => (
  <div id='schedule' className='schedule'>
    <button id='editScheduleBtn'>Edit</button>
    <h1 className='title'>Volunteer Schedule for [date] </h1>
    <ScheduleRow />
  </div>    
)

export default ScheduleList

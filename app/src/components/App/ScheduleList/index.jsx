import React from 'react'
import ScheduleRow from './ScheduleRow'
import styles from './style.css'

{/* edit button should only appear when admin is logged in */}

const ScheduleList = () => {
  return (
    <div id='schedule' className={styles.schedule}>
      <button id='editScheduleBtn'>Edit</button>
      <h1 className={styles.title}>Volunteer Schedule for [date] </h1>
      <ScheduleRow />
    </div>    
  )
}

export default ScheduleList

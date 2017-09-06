// ScheduleList
import React from 'react'
import ScheduleRow from './ScheduleRow'
import styles from './style.css'
import { Link } from 'react-router-dom'

/* edit button should only appear when admin is logged in */

const ScheduleList = () => {
  return (
    <div id='schedule' className={styles.schedule}>
      <Link to='/editvolunteer'><button id='editScheduleBtn'>Edit</button></Link>
      <h1 className={styles.title}>Volunteer Schedule for [date] </h1>
      <ScheduleRow />
    </div>
  )
}

export default ScheduleList

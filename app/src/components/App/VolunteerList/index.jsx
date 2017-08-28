import React from 'react'
import VolunteerRow from './VolunteerRow'
import styles from './style.css'

const VolunteerList = () => {
  return (
    <div id='volunteerList' className={styles.volunteerList}>
      <h1 className={styles.title}>Volunteer List</h1>

      <button id='editVolunteerBtn'>Edit</button>
      
      <VolunteerRow />
    </div>    
  )
}

export default VolunteerList

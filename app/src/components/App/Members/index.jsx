import React from 'react'
import MemberRow from './MemberRow'
import styles from './style.css'

const Members = () => {
  return (
    <div id='members' className={styles.volunteerList}>
      <h1 className={styles.title}>Members</h1>
      <MemberRow />
    </div>
  )
}

export default Members

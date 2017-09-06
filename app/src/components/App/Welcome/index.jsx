import React from 'react'
import styles from './style.css'

 /* Welcome message will switch to current schedule upon log in */

const Welcome = () => {
  return (
    <div id='welcome' className={styles.welcome}>
      <h1 className={styles.welcomeMessage}>
        Please log in to view current volunteer schedule.
      </h1>
    </div>
  )
}

export default Welcome

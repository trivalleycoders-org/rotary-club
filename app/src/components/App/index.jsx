import React, { Component } from 'react'
import ScheduleList from './ScheduleList'
import styles from './style.css'
import TopBar from './TopBar'

class App extends Component {
  render () {
    return (
      <div className={styles.appWrapper}>
        <TopBar />
        <ScheduleList />
      </div>
    )
  }
}
export default App

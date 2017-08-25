import React, { Component } from 'react'
//import EditList from './EditList'
//import VolunteerList from './VolunteerList'
import EditVolunteer from './EditVolunteer'
// import ScheduleList from './ScheduleList'
import styles from './style.css'
import TopBar from './TopBar'

class App extends Component {
  render () {
    return (
      <div className={styles.appWrapper}>
        <TopBar />
        <EditVolunteer />
      </div>
    )
  }
}
export default App

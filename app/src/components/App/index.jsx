import React, { Component } from 'react'
import EditList from './EditList'
import styles from './style.css'
import TopBar from './TopBar'

class App extends Component {
  render () {
    return (
      <div className={styles.appWrapper}>
        <TopBar />
        <EditList />
      </div>
    )
  }
}
export default App

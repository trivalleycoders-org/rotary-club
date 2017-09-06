import React from 'react'
import styles from './style.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import EditList from './EditList'
import EditVolunteer from './EditVolunteer'
import Login from './Login'
import Logout from './Logout'
import Members from './Members'
import Schedule from './Schedule'
import TopBar from './TopBar'
import Welcome from './Welcome'

const App = () => (
  <Router>
    <div className={styles.appWrapper}>
      <TopBar />
      <Route path='/editlist' component={EditList} />
      <Route path='/editvolunteer' component={EditVolunteer} />
      <Route path='/login' component={Login} />
      <Route path='/logout' component={Logout} />
      <Route path='/members' component={Members} />
      <Route path='/schedule' component={Schedule} />
      <Route path='/welcome' component={Welcome} />
    </div>
  </Router>
)
export default App

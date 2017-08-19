import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import './style.css'
import TopBar from './TopBar'

class App extends Component {
  render () {
    return (
      <div className='app-wrapper'>
        <TopBar />
        <Header />
        <Welcome />
      </div>
    )
  }
}
export default App

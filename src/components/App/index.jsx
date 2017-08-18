import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import './style.css'

class App extends Component {
  render () {
    return (
      <div className='app-wrapper'>
        <Header />
        <Welcome />
      </div>
    )
  }
}
export default App

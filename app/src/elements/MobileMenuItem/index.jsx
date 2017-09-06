import React from 'react'
import styles from './style.css'
import { Link } from 'react-router-dom'

const MobileMenuItem = (props) => {
  return (
    <Link to={props.to} key={props.label} className={styles.menuItem}>{props.label}</Link>
  )
}

export default MobileMenuItem

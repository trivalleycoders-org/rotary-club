import React from 'react'
import styles from './style.css'

const MobileMenuItem = (props) => {
  return (
    <a href={props.href} key={props.label} className={styles.menuItem}>{props.label}</a>
  )
}

export default MobileMenuItem

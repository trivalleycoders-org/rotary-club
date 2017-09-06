// TopBarDesktop
import React from 'react'
import styles from './style.css'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const TopBarDesktop = (props) => {

  const { brandName, logo, brandColor } = props.brand
  const configStyles = {
    color: brandColor,
    // fontSize: brandSizeDesktop,
  }
  const imgStyles = classNames({
    [styles.tvcLogo]: true,
    [styles.imgResponsive]: true,
  })

  const renderMenuItems = props.menuItems.map((m) => (
    <Link to={m.to} key={m.label} className={styles.desktopMenuItem}>{m.label}</Link>
  ))

  return (
    <div className={styles.topBar}>
      <div className={styles.brandingDesktop}>
        <img className={imgStyles} src={logo} alt='tvc-logo' />
        <div className={styles.brand} style={configStyles}>{brandName}</div>
      </div>
      <div className={styles.desktopMenuItems}>
        {renderMenuItems}
      </div>
    </div>
  )
}

export default TopBarDesktop

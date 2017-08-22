// TopBarPhone
import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './style.css'
import iHamburger from './hamburger.png'
import MobileMenuItem from '../../../../elements/MobileMenuItem'

class TopBarPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
    }
  }

  render() {
    const { brandName, brandColor, logo } = this.props.brand
    const mobileMenu = classNames({
      [styles.hideMobileMenu]: !this.state.showMobileMenu,
      [styles.showMobileMenu]: this.state.showMobileMenu,
    })

    const handleHamburgerClick = () => {
      let val;
      this.state.showMobileMenu
        ? val = false
        : val = true
      this.setState({ showMobileMenu: val })
    }

    const renderMenuItems = this.props.menuItems.map((m) => (
      <MobileMenuItem
        key={m.label}
        href={m.href}
        label={m.label} />
    ))

    const configStyles = {
      color: brandColor,
      // fontSize: brandSizePhone,
    }

    return (

      <div className={styles.topBar}>
        <div className={styles.firstRow}>
          <div className={styles.brand}>
            <img className={styles.tvcLogo} src={logo} alt='tvc-logo' />
            <div className={styles.brand} style={configStyles}>{brandName}
            </div>
          </div>
          <div className={styles.mobileMenuDiv} onClick={() => handleHamburgerClick()}>
            {/* <img className={styles.hamburger} src={iHamburger} /> */}
            <div className="glyphicon glyphicon-menu-hamburger hamburger" aria-hidden="true">
            </div>
          </div>
        </div>
        <div className={mobileMenu}>
          {renderMenuItems}
        </div>
      </div>
    )
  }
}

export default TopBarPhone

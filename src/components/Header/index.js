import React from 'react'
// Imports for UI
import logo from 'src/assets/logo.png'
import styles from './style.module.scss'

function Header (props) {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <img src={logo} className={styles.logo} alt='logo'/>
      </div>
    </div>
  )
}

export default Header

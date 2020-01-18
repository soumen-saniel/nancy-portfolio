import React from 'react'
import styles from './styles.module.scss'

const Landing = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.menuSection}></div>
      <div className={styles.contentSection}></div>
      <div className={styles.socialLinksSection}></div>
    </div>
  )
}

export default Landing

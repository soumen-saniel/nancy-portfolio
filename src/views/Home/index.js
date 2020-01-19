import React from 'react'
import styles from './styles.module.scss'
// Views
import Landing from './Landing'

const Home = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.menuSection}></div>
      <div className={styles.contentSection}>
        <Landing/>
      </div>
      <div className={styles.socialLinksSection}></div>
    </div>
  )
}

export default Home

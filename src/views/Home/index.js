import React from 'react'
// Assets
import Arrow from 'src/assets/icons/Arrow.svg'
// Components
import SocialLinks from 'src/components/SocialLinks'
// Views
import Landing from './Landing'

import styles from './styles.module.scss'

const Home = (props) => {
  return (
    <div className={styles.home_root}>
      <div className={styles.home_menu}></div>
      <div className={styles.home_content}>
        <Landing/>
      </div>
      <div className={styles.home_social_links}>
        <SocialLinks/>
        <div className={styles.home_explore_more}>
          <div>
            <small>EXPLORE</small>
          </div>
          <img src={Arrow} alt='Explore more' />
        </div>
      </div>
    </div>
  )
}

export default Home

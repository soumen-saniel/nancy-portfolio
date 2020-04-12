import React from 'react'
import PropTypes from 'prop-types'
// Assets
import Arrow from 'src/assets/icons/Arrow.svg'
// Components
import MenuDesktop from 'src/components/MenuDesktop'
import SocialLinks from 'src/components/SocialLinks'

import styles from '../styles.module.scss'

const Articles = ({ location }) => {
  return (
    <div className={styles.view_root}>
      <div className={styles.view_menu}>
        <MenuDesktop
          location={location}
        />
      </div>
      <section className={styles.view_content} id='section-landing'>
        <h1>Articles</h1>
      </section>
      <div className={styles.view_social_links}>
        <SocialLinks/>
        <div className={styles.view_explore_more}>
          <div>
            <small>EXPLORE</small>
          </div>
          <img src={Arrow} alt='Explore more' />
        </div>
      </div>
    </div>
  )
}

Articles.propTypes = {
  location: PropTypes.object
}

export default Articles

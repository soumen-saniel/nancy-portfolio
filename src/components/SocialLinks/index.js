import React from 'react'
// Icons
import Facebook from 'src/assets/icons/Facebook.svg'
import Instagram from 'src/assets/icons/Instagram.svg'
import LinkedIN from 'src/assets/icons/LinkedIN.svg'
import Twitter from 'src/assets/icons/Twitter.svg'

import Styles from './styles.module.scss'

const SocialLinks = () => {
  return (
    <nav className={Styles.root}>
      <a>
        <img src={Facebook} />
      </a>
      <a>
        <img src={Instagram} />
      </a>
      <a>
        <img src={LinkedIN} />
      </a>
      <a>
        <img src={Twitter} />
      </a>
    </nav>
  )
}

export default SocialLinks

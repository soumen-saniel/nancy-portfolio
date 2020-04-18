import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { useStaticQuery, graphql, Link } from 'gatsby'
// Styles
import styles from './style.module.scss'

const useLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return get(data, 'site.siteMetadata.menuLinks') || []
}

const MenuDesktop = ({ location }) => {
  console.log(location)
  const links = useLinks()
  return (
    <nav className={styles.menu_nav}>
      {links.map((link) => {
        return (
          <React.Fragment key={link.name}>
            <div className={styles.menu_scroll_indicator} />
            <Link
              className={styles.menu_links}
              to={link.link}
            >
              <small>{link.name}</small>
            </Link>
          </React.Fragment>
        )
      })}
    </nav>
  )
}

MenuDesktop.propTypes = {
  location: PropTypes.object
}

export default MenuDesktop

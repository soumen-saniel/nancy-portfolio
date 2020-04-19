import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import findIndex from 'lodash/findIndex'
import last from 'lodash/last'
import TransitionLink from 'gatsby-plugin-transition-link'
import { useStaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'
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
  const links = useLinks()
  console.log(last(location.pathname.split('/')))
  const activeLinkIndex = findIndex(links, (link) => '/' + last(location.pathname.split('/')) === link.link)
  return (
    <nav className={styles.menu_nav}>
      {links.map((link, index) => {
        return (
          <React.Fragment key={link.name}>
            <div
              className={classNames(
                styles.menu_scroll_indicator,
                {
                  [styles.menu_scroll_indicator_active]: index <= activeLinkIndex
                }
              )}
            />
            <TransitionLink
              activeClassName={styles.menu_active}
              className={classNames(
                styles.menu_links,
                {
                  [styles.menu_active]: index <= activeLinkIndex
                }
              )}
              to={link.link}
            >
              <small>{link.name}</small>
            </TransitionLink>
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

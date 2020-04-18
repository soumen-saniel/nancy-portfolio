import React, { useRef, useState, useEffect } from 'react'
import get from 'lodash/get'
import TransitionLink from 'gatsby-plugin-transition-link'
import { useStaticQuery, graphql } from 'gatsby'
import { CSSTransition } from 'react-transition-group'
// Imports for UI
import logo from 'src/assets/logo.png'
import menu from 'src/assets/icons/Menu.svg'
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

function Header (props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuDrawer = useRef()
  const menuButton = useRef()
  const links = useLinks()

  const handleClickOutside = (e) => {
    if (menuDrawer.current && menuButton.current) {
      if (!menuDrawer.current.contains(e.target) && menuButton.current !== e.target) {
        setMenuOpen(false)
      }
    }
  }

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <img src={logo} className={styles.logo} alt='logo'/>
        <img
          alt='menu'
          className={styles.menu_button}
          onClick={() => {
            setMenuOpen(state => !state)
          }}
          ref={menuButton}
          src={menu}
        />
      </div>
      <CSSTransition
        in={menuOpen}
        timeout={150}
        classNames={{
          enter: styles.menu_enter,
          enterActive: styles.menu_enter_active,
          exit: styles.menu_exit,
          exitActive: styles.menu_exit_active
        }}
        unmountOnExit
      >
        <div ref={menuDrawer} className={styles.menu_drawer}>
          {links.map((link) => {
            return (
              <TransitionLink
                activeClassName={styles.menu_active}
                className={styles.menu_links}
                delay={1000}
                exit={{
                  delay: 0.2
                }}
                key={link.name}
                onClick={() => setMenuOpen(false)}
                to={link.link}
              >
                <h2>{link.name}</h2>
              </TransitionLink>
            )
          })}
        </div>
      </CSSTransition>
    </div>
  )
}

export default Header

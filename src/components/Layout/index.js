import React from 'react'
import PropType from 'prop-types'
import 'normalize.css/normalize.css'
import 'src/styles/index.scss'
import styles from './style.module.scss'

function Layout (props) {
  return (
    <div className={styles.root}>
      {props.children}
    </div>
  )
}

Layout.propTypes = {
  children: PropType.node
}

export default Layout

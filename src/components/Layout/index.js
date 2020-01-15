import React from 'react'
import PropType from 'prop-types'
import 'normalize.css/normalize.css'
import 'src/styles/index.scss'
import styles from './style.module.scss'
import Header from 'src/components/Header'

function Layout (props) {
  return (
    <div className={styles.root}>
      <Header/>
      <main className={styles.content}>
        {props.children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropType.node
}

export default Layout

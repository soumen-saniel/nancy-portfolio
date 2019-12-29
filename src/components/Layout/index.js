import React from 'react'
import PropType from 'prop-types'
import 'normalize.css/normalize.css'
import 'src/style.scss'
import './layout.module.scss'

function Layout (props) {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropType.node
}

export default Layout

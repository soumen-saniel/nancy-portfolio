import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.module.scss'

const Button = ({
  children,
  filled,
  ...otherProps
}) => {
  return (
    <button className={`${Styles.root} ${filled ? Styles.filled : ''}`} {...otherProps}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  filled: PropTypes.bool
}

export default Button

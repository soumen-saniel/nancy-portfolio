import React from 'react'
import './normalize.css'
import breakpoints from './breakpoints'

const theme = {
  breakpoints: breakpoints(),
  palette: {
    background: {
      'bg-1': '#F2F1F0',
      'bg-2': '#D7F2F7',
      'bg-3': '#4EC5D1'
    },
    container: {
      'ct-1': '#354D62',
      'ct-2': '#30779F'
    },
    text: {
      'text-primary': '#354D62',
      'text-secondary': '#FFFFFF'
    }
  },
  spacing: {
    unit: 18
  },
  shape: {
    borderRadius: 7
  },
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
    button: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: 700,
      fontSize: '11px',
      letterSpacing: '1px',
      lineHeight: '15px',
      textTransform: 'uppercase'
    },
    body1: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '26px',
      letterSpacing: '0.25px'
    },
    body2: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '18px',
      letterSpacing: '0.216667px'
    },
    label: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: 700,
      fontSize: '15px',
      lineHeight: '20px'
    },
    small: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '16px'
    },
    title: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: 600,
      fontSize: '22px',
      lineHeight: '30px'
    },
    heading: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: 800,
      fontSize: '22px',
      lineHeight: '32px'
    },
    tableCell: {
      fontFamily: 'Nunito Sans, sans-serif',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '11px',
      lineHeight: '15px',
      letterSpacing: 0.183333
    }
  },
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    indicator: 1400,
    tooltip: 1500
  }
}

export const ThemeContext = React.createContext(theme)

export default theme

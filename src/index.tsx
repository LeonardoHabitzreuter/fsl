import React from 'react'
import { render } from 'react-dom'
import App from './pages/Main'
import { GlobalStyle } from './globalStyles'

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('app')
)

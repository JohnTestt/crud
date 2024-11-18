
import React from 'react'
import ReactDOM from 'react-dom/client'
import ThemeWrapper from './contexts/theme/ThemeWrapper'


ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
   <ThemeWrapper />
  </React.StrictMode>
)

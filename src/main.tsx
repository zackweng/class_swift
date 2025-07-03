import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root') ?? (() => {
  throw new Error('Root element not found')
})()

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

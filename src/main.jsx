import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '../components/theme-provider'
import './index.css'
import '../styles/globals.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="localstore-theme">
      <App />
    </ThemeProvider>
  </StrictMode>,
)

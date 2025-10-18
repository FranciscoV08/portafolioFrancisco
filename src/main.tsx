// Archivos de libreria
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// importaciones de archivos locales abajo
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

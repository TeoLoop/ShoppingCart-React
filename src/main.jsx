import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppCarrito } from './AppCarrito'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StrictMode>
      <AppCarrito />
    </StrictMode>,
  </BrowserRouter>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './Aura/Aura.module.css'
import './Footer/Footer.module.css'
import './Header/Header.module.css'
import './Navigation/Navigation.module.css'

import App from './Website.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

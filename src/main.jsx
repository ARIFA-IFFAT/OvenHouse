import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// css
import "../src/assets/Style/Import.min.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

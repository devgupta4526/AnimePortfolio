import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MobileProvider } from './utils/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MobileProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </MobileProvider>
  
)

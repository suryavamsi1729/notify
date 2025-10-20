import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {NotificationProvider} from './context/NotificationProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationProvider 
      position='topCenter'
      audio ={{
        enabled:true,
        src:"/sounds/customsound.mp3"
      }}
      animation='slide'
    >
      <App />
    </NotificationProvider>
  </StrictMode>,
)

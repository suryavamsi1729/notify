import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {EchoToastProvider} from './context/EchoToastProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EchoToastProvider 
      position='topCenter'
      audio ={{
        enabled:true,
        src:"/sounds/customsound.mp3"
      }}
      animation='slide'
    >
      <App />
    </EchoToastProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router/router'
import '/src/app/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	 <AppRouter/>
  </StrictMode>,
)
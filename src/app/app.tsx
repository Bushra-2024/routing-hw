import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/app/styles/global.css'
import AppRouter from './router/router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
	 <AppRouter/>
  </StrictMode>,
)

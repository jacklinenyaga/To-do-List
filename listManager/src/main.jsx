import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoWrapper } from './assets/Components/ToDoWrapper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoWrapper />
  </StrictMode>,
)

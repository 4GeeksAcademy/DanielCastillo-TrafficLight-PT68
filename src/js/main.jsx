import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ActTL} from './components/TL'
import '/src/styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActTL/>
    </StrictMode>,
)
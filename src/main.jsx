import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import MarqueeServices from './components/MarqueeServices'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero/>
    {/* <MarqueeServices /> */}
  </StrictMode>,
)
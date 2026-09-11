import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/about'
import {Marquee} from './components/MarqueeServices'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Marquee />
    <About />
  </StrictMode>,
)
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experiences from './sections/Experiences'
import Projects from './sections/Projects'
import Awards from './sections/Awards'
import Contact from './sections/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
   <Hero/>
   <About/>
   <Skills/>
   <Experiences/>
   <Awards/>
   <Projects/>
   <Contact/>
  </>
  )
}

export default App

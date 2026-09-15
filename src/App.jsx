import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ExperienceEducation from './components/ExperienceEducation'
import Achievements from './components/Achievements'
import ResumeCta from './components/ResumeCta'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceEducation />
      <Achievements />
      <ResumeCta />
      <Contact />
      <Footer />
    </>
  )
}

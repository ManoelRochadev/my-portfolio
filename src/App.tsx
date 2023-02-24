import { useState } from 'react'
import { About } from './components/About'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {

  return (
    <div className="w-screen font-sans text-white">
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App

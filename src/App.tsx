import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {

  return (
    <div className="w-full font-sans text-white">
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App

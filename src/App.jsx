import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import AiCapabilities from './components/AiCapabilities'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <AiCapabilities />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

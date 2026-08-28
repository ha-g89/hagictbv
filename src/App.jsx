import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import AiCapabilities from './components/AiCapabilities'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import IctFunction from './pages/IctFunction/IctFunction'

function App() {
  // Verborgen subpagina — geen links vanaf de landingspagina.
  if (window.location.pathname.replace(/\/+$/, '') === '/3ictfunction') {
    return <IctFunction />
  }

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

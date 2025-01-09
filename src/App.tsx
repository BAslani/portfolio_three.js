import About from './sections/About'
import Clients from './sections/Clients'
import Contacts from './sections/Contacts'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'

export default function App() {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Contacts />
      <Footer />
    </main>
  )
}

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Eventos from './sections/Eventos'
import Sobre from './sections/Sobre'
import Comemore from './sections/Comemore'
import Contato from './sections/Contato'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Eventos />
        <Sobre />
        <Comemore />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
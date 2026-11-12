import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Banquets from './components/Banquets.jsx'
import Advantages from './components/Advantages.jsx'
import Menu from './components/Menu.jsx'
import Gallery from './components/Gallery.jsx'
import Reservations from './components/Reservations.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-sans text-ivory">
      <a href="#main" className="sr-only-focus sr-only">Перейти к содержимому</a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Banquets />
        <Advantages />
        <Menu />
        <Gallery />
        <Reservations />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

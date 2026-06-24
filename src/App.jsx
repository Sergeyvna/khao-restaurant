import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="wrap">
      <Nav />
      <Hero />
      <MenuSection />
      <InfoSection />
      <Footer />
    </div>
  )
}

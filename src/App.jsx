import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import LocationPage from './components/LocationPage'

export default function App() {
  const [page, setPage] = useState('home')

  if (page === 'location') {
    return <LocationPage onBack={() => setPage('home')} />
  }

  return (
    <div className="wrap">
      <Nav />
      <Hero onLocationClick={() => setPage('location')} />
      <MenuSection />
      <InfoSection />
      <Footer />
    </div>
  )
}

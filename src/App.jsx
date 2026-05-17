import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '@layout/Navbar'
import Footer from '@layout/Footer'
import ScrollProgress from '@ui/ScrollProgress'
import CursorGlow from '@ui/CursorGlow'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

export default function App() {
  // Reveal-on-scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import arelLogo from '../../assets/images/arel-logo.jpeg'

const NAV_LINKS = [
  { label: 'About',     href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Podcast',   href: '#podcast' },
  { label: 'Book',      href: '#book' },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '1.2rem 2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: scrolled ? 'rgba(13,17,23,0.95)' : 'rgba(13,17,23,0.6)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(201,168,76,0.12)' : 'transparent'}`,
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
>
  <img
    src={arelLogo}
    alt="AR-EL Logo"
    style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
  />
</button>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }}
            className="hidden md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                style={{
                  fontSize: '0.78rem', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--text-muted)',
                  background: 'none', border: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            className="hidden md:block btn-outline"
            style={{ padding: '0.45rem 1.25rem', fontSize: '0.72rem' }}
            onClick={() => scrollTo('#contact')}
          >
            Connect
          </button>
          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '1.5px',
                background: 'var(--text-muted)',
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                  : 'scaleX(0)'
                  : 'none',
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'var(--dark)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.href)}
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '2rem', color: 'var(--text-muted)',
                  background: 'none', border: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

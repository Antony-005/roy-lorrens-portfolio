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

  // Solid background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll while the menu is open; close on Escape or when resized to desktop
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const scrollTo = (href) => {
    const wasOpen = menuOpen
    setMenuOpen(false)
    // Small delay so the body scroll-lock is released before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, wasOpen ? 80 : 0)
  }

  const navClass =
    'site-nav' + (scrolled ? ' is-scrolled' : '') + (menuOpen ? ' is-open' : '')

  return (
    <>
      <nav className={navClass} aria-label="Main navigation">
        {/* Logo */}
        <button
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <img src={arelLogo} alt="AR-EL Logo" />
        </button>

        {/* Desktop links (shown from 1024px up) */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button className="nav-link" onClick={() => scrollTo(link.href)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="nav-actions">
          <button className="btn-outline nav-cta" onClick={() => scrollTo('#contact')}>
            Connect
          </button>

          <button
            className="nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="burger-lines">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '24px',
                    height: '1.5px',
                    background: menuOpen ? 'var(--gold)' : 'var(--text-muted)',
                    transition: 'all 0.3s',
                    transform: menuOpen
                      ? i === 0
                        ? 'translateY(6.5px) rotate(45deg)'
                        : i === 2
                        ? 'translateY(-6.5px) rotate(-45deg)'
                        : 'scaleX(0)'
                      : 'none',
                  }}
                />
              ))}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'var(--dark)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
            }}
          >
            {/* margin:auto centres the links, and still lets short screens scroll */}
            <div
              style={{
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '6rem 1.5rem 3rem',
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  className="menu-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(link.href)}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
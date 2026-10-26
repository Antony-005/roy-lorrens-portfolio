import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import portraitHero from '../../assets/images/portrait-hero.jpeg'

const ROLES = [
  'Learning Strategist',
  'Podcast Host — AR-EL',
  'Author — Chasing Ayana',
  'HR Consultant',
  'Organizational Thinker',
]

const STATS = [
  { num: 5,  suffix: '+', label: 'Years Experience' },
  { num: 20, suffix: '+', label: 'Clients Supported' },
  { num: 5,  suffix: '+', label: 'Podcast Episodes' },
]

// Typewriter hook (shows a static first role if the visitor prefers reduced motion)
function useTypewriter(words) {
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return
    const current = words[wordIdx]
    const speed = deleting ? 55 : 90
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.substring(0, charIdx + 1))
        setCharIdx((c) => c + 1)
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        setDisplay(current.substring(0, charIdx - 1))
        setCharIdx((c) => c - 1)
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx((w) => (w + 1) % words.length)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [charIdx, deleting, wordIdx, words, reduced])

  return reduced ? words[0] : display
}

export default function Hero() {
  const typed = useTypewriter(ROLES)
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="hero-section">
      {/* Backgrounds */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="hero-grid-overlay" />

      {/* Content */}
      <div className="hero-inner">
        <div className="hero-grid-layout">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Tag */}
            <div className="hero-tag">
              <span className="hero-tag-line" />
              Learning Strategist · Author · Podcast Host
            </div>

            {/* Name */}
            <h1
              className="hero-title"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                lineHeight: 1.05,
                color: 'var(--text)',
                marginBottom: '0.5rem',
              }}
            >
              Roy Lorrens<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Odhiambo</em>
            </h1>

            {/* Typewriter */}
            <p
              aria-hidden="true"
              style={{
                fontSize: '0.95rem',
                letterSpacing: '0.06em',
                color: 'var(--text-muted)',
                marginBottom: '1.25rem',
                minHeight: '1.5rem',
              }}
            >
              {typed}
              <span style={{ animation: 'blink 0.8s step-end infinite', color: 'var(--gold)' }}>|</span>
            </p>

            {/* Tagline */}
            <p className="hero-tagline">
              Translating ideas into practical knowledge that empowers individuals and organizations.
            </p>

            {/* CTAs */}
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                Contact Roy
              </button>
              <button className="btn-outline" onClick={() => scrollTo('expertise')}>
                Explore Work
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="hero-stats">
              {STATS.map(({ num, suffix, label }) => (
                <div key={label} className="hero-stat">
                  <span className="hero-stat-num">
                    {statsInView ? <CountUp end={num} duration={2} suffix={suffix} /> : '0' + suffix}
                  </span>
                  <span className="hero-stat-label">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="hero-portrait"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="hero-portrait-frame">
              <img
                src={portraitHero}
                alt="Roy Lorrens Odhiambo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              {/* Corner accents */}
              <div className="corner-tl" />
              <div className="corner-br" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="hero-badge"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hero-badge-title">MBA</div>
              <div className="hero-badge-sub">Strategic Mgmt</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <div className="hero-scroll" aria-hidden="true">
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--gold), transparent)',
            animation: 'scrollAnim 1.8s ease-in-out infinite',
          }}
        />
        Scroll
      </div>
    </section>
  )
}
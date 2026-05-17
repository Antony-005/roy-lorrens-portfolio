import { useEffect, useState, useRef } from 'react'
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
  { num: 5, suffix: '+', label: 'Podcast Episodes' },
]

// Typewriter hook
function useTypewriter(words) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
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
  }, [charIdx, deleting, wordIdx, words])

  return display
}

export default function Hero() {
  const typed = useTypewriter(ROLES)
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', padding: '0',
      }}
    >
      {/* Backgrounds */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
      }} />
      <div className="hero-grid-overlay" />

      {/* Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 2rem 4rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
             className="hero-grid-layout">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Tag */}
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: '32px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
              Learning Strategist · Author · Podcast Host
            </div>

            {/* Name */}
            <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.8rem,5.5vw,4.5rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--text)', marginBottom: '0.5rem' }}>
              Roy Lorrens<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Odhiambo</em>
            </h1>

            {/* Typewriter */}
            <p style={{ fontSize: '0.95rem', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '1.25rem', minHeight: '1.5rem' }}>
              {typed}
              <span style={{ animation: 'blink 0.8s step-end infinite', color: 'var(--gold)' }}>|</span>
            </p>

            {/* Tagline */}
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2.5rem', borderLeft: '2px solid var(--gold)', paddingLeft: '1.25rem' }}>
              Translating ideas into practical knowledge that empowers individuals and organizations.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                Contact Roy
              </button>
              <button className="btn-outline" onClick={() => scrollTo('expertise')}>
                Explore Work
              </button>
            </div>

            {/* Stats */}
            <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px', background: 'var(--border2)' }}>
              {STATS.map(({ num, suffix, label }) => (
                <div key={label} style={{ background: 'var(--surface)', padding: '1.4rem', textAlign: 'center' }}>
                  <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', color: 'var(--gold)', fontWeight: 300, display: 'block' }}>
                    {statsInView ? <CountUp end={num} duration={2} suffix={suffix} /> : `0${suffix}`}
                  </span>
                  <span style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-dim)', marginTop: '0.2rem', display: 'block' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            style={{ position: 'relative' }}
          >
            <div style={{
  width: '100%', aspectRatio: '3/4', maxHeight: '520px',
  border: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
}}>
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
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: '-1.25rem', left: '-1.25rem',
                background: 'var(--dark)', border: '1px solid var(--border)',
                padding: '1rem 1.25rem',
              }}
            >
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.6rem', color: 'var(--gold)' }}>MBA</div>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Strategic Mgmt</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'var(--text-dim)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase',
      }}>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--gold), transparent)', animation: 'scrollAnim 1.8s ease-in-out infinite' }} />
        Scroll
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
        @keyframes scrollAnim { 0%,100%{opacity:0.3}50%{opacity:1} }
        @media(max-width:768px){
          .hero-grid-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

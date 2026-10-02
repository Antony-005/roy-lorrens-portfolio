import { FiLinkedin, FiYoutube, FiInstagram, FiFacebook } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const FOOTER_LINKS = ['About', 'Expertise', 'Podcast', 'Book', 'Education', 'Contact']

const SOCIAL = [
  { icon: FiLinkedin,  href: 'https://ke.linkedin.com/in/roy-lorrens-087305357',  label: 'LinkedIn' },
  { icon: FiYoutube,   href: 'https://www.youtube.com/@rlodhiambo',   label: 'YouTube' },
  { icon: FiInstagram, href: 'https://www.instagram.com/rl_odhiambo?utm_source=qr&igsh=MWVyMWJwd3k4aGlobA==', label: 'Instagram' },
  { icon: FiFacebook,  href: 'https://www.facebook.com/lorrens.roy',  label: 'Facebook' },
]

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid var(--border2)', padding: '3rem 0 1.5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem', alignItems: 'start' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '0.4rem' }}>
              Roy Lorrens Odhiambo
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.6 }}>
              Learning Strategist · Host · Author<br />
              Nairobi, Kenya
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '1rem' }}>
              Navigation
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {FOOTER_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  style={{ fontSize: '0.82rem', color: 'var(--text-dim)', background: 'none', border: 'none', textAlign: 'left', transition: 'color 0.2s', width: 'fit-content' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '1rem' }}>
              Follow
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '38px', height: '38px',
                    border: '1px solid var(--border2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-dim)', fontSize: '1rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text-dim)' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border2)', paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          {/* Copyright + Privacy Policy */}
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              © {new Date().getFullYear()} Roy Lorrens Odhiambo. All rights reserved.
            </p>
            <Link
              to="/privacy"
              style={{
                fontSize: '0.72rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--text-dim)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}
            >
              Privacy Policy
            </Link>
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            style={{
              width: '40px', height: '40px',
              border: '1px solid var(--border)',
              background: 'none', color: 'var(--text-dim)',
              fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-dim)' }}
          >
            ↑
          </button>
        </div>

      </div>
    </footer>
  )
}
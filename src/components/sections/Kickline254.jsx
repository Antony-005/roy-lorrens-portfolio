import { FiYoutube, FiInstagram, FiFacebook, FiExternalLink } from 'react-icons/fi'
import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'
import kicklineLogo from '../../assets/images/kickline254_logo.jpeg'

const PLATFORMS = [
  {
    icon: FiYoutube,
    name: 'YouTube',
    handle: '@kickline254',
    href: 'https://www.youtube.com/@kickline254',
  },
  {
    icon: FiInstagram,
    name: 'Instagram',
    handle: '@kickline254',
    href: 'https://www.instagram.com/kickline254/',
  },
  {
    icon: FiFacebook,
    name: 'Facebook',
    handle: 'Kickline254',
    href: 'https://www.facebook.com/people/Kickline254/61594382117102/',
  },
]

const PILLARS = [
  {
    icon: '⚽',
    title: 'Football Analysis',
    desc: 'In-depth match breakdowns, performance reviews, and pre-match previews covering Kenyan and regional football including Harambee Stars.',
  },
  {
    icon: '🎙️',
    title: 'Sports Commentary',
    desc: 'Bold, honest takes on the beautiful game from local league drama to continental competitions affecting Kenyan football.',
  },
  {
    icon: '🔥',
    title: 'Media & Culture Debates',
    desc: 'Long-form discussion panels covering hot-button topics in Kenyan digital culture, sports entertainment, and media.',
  },
]

export default function Kickline254() {
  return (
    <section id="kickline254" style={{ padding: '6rem 0', background: 'var(--dark)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <SectionLabel>Ventures & Projects</SectionLabel>
          <SectionTitle>Beyond the Office</SectionTitle>
          <GoldLine />
        </div>

        {/* Main Card */}
        <div className="reveal" style={{
          border: '1px solid var(--border)',
          background: 'var(--surface)',
          overflow: 'hidden',
          marginBottom: '2px',
        }}>
          {/* Top accent bar — Kickline green */}
          <div style={{ height: '3px', background: 'linear-gradient(to right, #00E664, #00B84A)' }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '0',
          }} className="kickline-hero-grid">

            {/* Left — Logo & Links */}
            <div style={{
              padding: '3rem',
              borderRight: '1px solid var(--border2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem',
              background: '#050505',
            }}>
              {/* Logo */}
              <div style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #00E664',
                boxShadow: '0 0 32px rgba(0,230,100,0.15)',
              }}>
                <img
                  src={kicklineLogo}
                  alt="Kickline254 Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Visit Website */}
              <a
                href="https://kickline254.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  border: '1px solid #00E664',
                  color: '#00E664',
                  fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  background: 'rgba(0,230,100,0.05)',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,230,100,0.12)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0,230,100,0.05)'
                }}
              >
                <FiExternalLink size={14} />
                kickline254.com
              </a>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {PLATFORMS.map(({ icon: Icon, name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    style={{
                      width: '38px', height: '38px',
                      border: '1px solid rgba(0,230,100,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(0,230,100,0.5)',
                      fontSize: '1rem', transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#00E664'
                      e.currentTarget.style.color = '#00E664'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,230,100,0.2)'
                      e.currentTarget.style.color = 'rgba(0,230,100,0.5)'
                    }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Content */}
            <div style={{ padding: '3rem' }}>
              <div style={{
                fontSize: '0.68rem', letterSpacing: '0.25em',
                textTransform: 'uppercase', color: '#00E664',
                marginBottom: '0.75rem',
              }}>
                Founded by Roy Lorrens Odhiambo
              </div>

              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                fontWeight: 300, color: 'var(--text)',
                marginBottom: '0.25rem', lineHeight: 1.1,
              }}>
                Kickline<span style={{ color: '#00E664' }}>254</span>
              </h3>

              <p style={{
                fontSize: '0.78rem', color: 'var(--text-dim)',
                letterSpacing: '0.08em', marginBottom: '1.5rem',
              }}>
                Digital Sports Media · Football Analysis · Kenyan Football Culture
              </p>

              <div style={{ width: '40px', height: '1px', background: '#00E664', marginBottom: '1.5rem' }} />

              <p style={{
                color: 'var(--text-muted)', fontSize: '0.92rem',
                lineHeight: 1.8, marginBottom: '1.5rem',
              }}>
                Kickline254 is Kenya's digital sports media outlet built for the football-obsessed. Founded by Roy Lorrens Odhiambo, it exists to give Kenyan football the serious, passionate, and informed coverage it deserves from grassroots analysis to Harambee Stars breakdowns.
              </p>

              <p style={{
                color: 'var(--text-muted)', fontSize: '0.92rem',
                lineHeight: 1.8,
              }}>
                Through long-form discussions, match analysis, and sports culture debates, Kickline254 is building a community of Kenyan football thinkers and creators who refuse to watch from the sidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          background: 'var(--border2)',
        }} className="kickline-pillars">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className={'reveal reveal-delay-' + i}
              style={{
                background: 'var(--surface)',
                padding: '2rem',
                borderTop: '2px solid transparent',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderTopColor = '#00E664'
                e.currentTarget.style.background = 'var(--surface2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderTopColor = 'transparent'
                e.currentTarget.style.background = 'var(--surface)'
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{pillar.icon}</div>
              <h4 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.15rem', color: 'var(--text)',
                marginBottom: '0.75rem', fontWeight: 400,
              }}>
                {pillar.title}
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media(max-width:768px){
          .kickline-hero-grid{ grid-template-columns: 1fr !important; }
          .kickline-hero-grid > div:first-child{ border-right: none !important; border-bottom: 1px solid var(--border2); }
          .kickline-pillars{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
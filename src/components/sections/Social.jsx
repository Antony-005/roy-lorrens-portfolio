import { FiLinkedin, FiYoutube, FiInstagram, FiFacebook } from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'
import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'

const SOCIALS = [
  { icon: FiLinkedin,  name: 'LinkedIn',  handle: 'Roy Lorrens Odhiambo', href: 'https://ke.linkedin.com/in/roy-lorrens-087305357' },
  { icon: FiYoutube,   name: 'YouTube',   handle: 'AR-EL Podcast',         href: 'https://www.youtube.com/@rlodhiambo' },
  { icon: FiInstagram, name: 'Instagram', handle: '@rl_odhiambo',           href: 'https://www.instagram.com/rl_odhiambo?utm_source=qr&igsh=MWVyMWJwd3k4aGlobA==' },
  { icon: SiTiktok,    name: 'TikTok',    handle: '@rl.odhiambo',           href: 'https://www.tiktok.com/@rl.odhiambo?_r=1&_t=ZS-96NObUrHYDH' },
  { icon: FiFacebook,  name: 'Facebook',  handle: 'Roy Lorrens',            href: 'https://www.facebook.com/lorrens.roy' },
]

export default function Social() {
  return (
    <section id="social" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', marginBottom: '3rem' }} className="reveal">
        <SectionLabel>Connect</SectionLabel>
        <SectionTitle>Social Presence</SectionTitle>
        <GoldLine />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1px', background: 'var(--border2)' }}
           className="social-grid">
        {SOCIALS.map((s, i) => {
          const Icon = s.icon
          return (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i % 4}`}
              style={{
                background: 'var(--dark)', padding: '2.5rem 1.5rem',
                textAlign: 'center', display: 'block',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--dark)'}
            >
              <div style={{ fontSize: '1.6rem', color: 'var(--gold-dim)', marginBottom: '1rem', transition: 'color 0.2s' }}>
                <Icon />
              </div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                {s.name}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{s.handle}</div>
            </a>
          )
        })}
      </div>
      <style>{`@media(max-width:900px){.social-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:500px){.social-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

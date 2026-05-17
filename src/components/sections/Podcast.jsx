import { FiPlay, FiExternalLink } from 'react-icons/fi'
import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'

const EPISODES = [
  { num: '01', title: 'Before the Title', guest: 'Robert Owuor' },
  { num: '02', title: 'Beyond the Title', guest: 'Robert Owuor' },
  { num: '03', title: 'Humans vs Giraffes', guest: 'Emmanuel Ngumbi' },
]

export default function Podcast() {
  return (
    <section id="podcast" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="reveal">
          <SectionLabel>Media</SectionLabel>
          <SectionTitle>AR-EL Podcast</SectionTitle>
          <GoldLine />
        </div>

        {/* Hero Card */}
        <div className="reveal" style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          padding: '3rem', display: 'grid', gridTemplateColumns: 'auto 1fr',
          gap: '3rem', alignItems: 'center', marginBottom: '2px',
        }}>
          {/* Cover art */}
          <div style={{
            width: '160px', height: '160px', flexShrink: 0,
            background: 'var(--dark)', border: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
          }}>
            <div style={{
              width: '52px', height: '52px', border: '1.5px solid var(--gold)',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--gold)',
            }}>
              <FiPlay size={20} />
            </div>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', color: 'var(--gold)', letterSpacing: '0.15em' }}>AR-EL</div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>Podcast</div>
          </div>

          {/* Info */}
          <div>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 300, color: 'var(--text)', marginBottom: '0.5rem' }}>
              AR-EL Podcast
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.75rem', maxWidth: '520px' }}>
              A leadership and learning podcast exploring life lessons, strategy, and professional growth through honest conversations with professionals and thought leaders shaping their fields.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://www.youtube.com/@rlodhiambo" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Watch Episodes <FiExternalLink size={14} />
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>

        {/* Episodes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border2)' }}
             className="episodes-grid">
          {EPISODES.map((ep, i) => (
            <div key={ep.num} className={`reveal reveal-delay-${i}`}
                 style={{ background: 'var(--dark)', padding: '2rem 1.5rem' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem', display: 'block' }}>
                Episode {ep.num}
              </span>
              <h4 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem', marginBottom: '0.4rem', color: 'var(--text)', fontWeight: 400 }}>
                {ep.title}
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '1.25rem' }}>Guest: {ep.guest}</p>
              <button
                style={{
                  width: '36px', height: '36px', border: '1px solid var(--border)',
                  borderRadius: '50%', background: 'none', color: 'var(--gold-dim)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--gold-dim)' }}
                aria-label={`Play episode ${ep.num}`}
              >
                <FiPlay size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.episodes-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

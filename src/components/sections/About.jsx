import { motion } from 'framer-motion'
import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'
import portraitAbout from '../../assets/images/portrait-about.jpeg'

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}
             className="about-grid">

          {/* Portrait */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{ width: '100%', aspectRatio: '1', border: '1px solid var(--border)', overflow: 'hidden' }}>
  <img
    src={portraitAbout}
    alt="Roy Lorrens Odhiambo"
    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
  />
</div>
            <div style={{
              position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
              background: 'var(--dark)', border: '1px solid var(--border)', padding: '1.25rem', textAlign: 'center',
            }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.8rem', color: 'var(--gold)' }}>ANU</div>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>MBA · 2025</div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal reveal-delay-1">
            <SectionLabel>About Roy</SectionLabel>
            <SectionTitle>
              Strategist. Storyteller.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Catalyst.</em>
            </SectionTitle>
            <GoldLine />

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
              Roy Lorrens Odhiambo is a learning strategist, content creator, and storyteller passionate about translating ideas into practical knowledge that empowers individuals and organizations.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
              With experience in corporate environments and strategic HR practice, he contributes to performance management, employee development, and organizational growth initiatives. Alongside his corporate exposure, Roy engages in strategic HR consulting, helping individuals and organizations rethink systems, improve culture, and design effective learning strategies.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
              He is the Secretary of Vibrant Research Forum 101, supporting knowledge-sharing, research collaboration, and intellectual engagement across disciplines.
            </p>

            {/* Philosophy quote */}
            <div style={{
              borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem',
              background: 'rgba(201,168,76,0.03)', padding: '1.25rem 1.5rem',
              fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem',
              fontStyle: 'italic', color: 'var(--text-muted)', lineHeight: 1.7,
            }}>
              "Knowledge is only powerful when it moves from the page, through the person, into the world."
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </section>
  )
}

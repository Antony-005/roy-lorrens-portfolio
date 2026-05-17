import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'

const TESTIMONIALS = [
  {
    text: 'Roy brought a clarity and depth to our HR strategy that we had been missing for years. His ability to translate complex people-challenges into actionable frameworks was exceptional.',
    name: 'Jane M.',
    role: 'HR Director — Corporate Client',
    initials: 'JM',
  },
  {
    text: 'Being a guest on AR-EL Podcast was an experience I didn\'t expect to enjoy as much as I did. Roy asks questions that make you think differently about your own journey.',
    name: 'Robert O.',
    role: ' Podcast Guest',
    initials: 'RO',
  },
  {
    text: 'Roy\'s workshop on learning strategy fundamentally changed how our team approaches employee development. Practical, thoughtful, and brilliantly facilitated.',
    name: 'Amara N.',
    role: 'L&D Manager — NGO Sector',
    initials: 'AN',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', marginBottom: '3rem' }} className="reveal">
        <SectionLabel>What People Say</SectionLabel>
        <SectionTitle>Testimonials</SectionTitle>
        <GoldLine />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border2)' }}
           className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} className={`reveal reveal-delay-${i}`}
               style={{ background: 'var(--surface)', padding: '2.5rem', position: 'relative' }}>
            {/* Decorative quote mark */}
            <div style={{
              position: 'absolute', top: '1rem', right: '1.5rem',
              fontFamily: '"Cormorant Garamond", serif', fontSize: '5rem',
              color: 'rgba(201,168,76,0.1)', lineHeight: 1, userSelect: 'none',
            }}>
              "
            </div>

            <p style={{
              fontFamily: '"Cormorant Garamond", serif', fontSize: '1rem',
              fontStyle: 'italic', color: 'var(--text-muted)', lineHeight: 1.75,
              marginBottom: '1.5rem', position: 'relative',
            }}>
              {t.text}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'var(--surface2)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.82rem', color: 'var(--gold-dim)', fontWeight: 500, flexShrink: 0,
              }}>
                {t.initials}
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 500 }}>{t.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.testimonials-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

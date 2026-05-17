import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'

const EDUCATION = [
  {
    years: '2023 – 2025',
    degree: 'MBA, Strategic Management',
    school: 'Africa Nazarene University',
  },
  {
    years: '2019 – 2023',
    degree: 'Bachelor of Business & Information Technology',
    school: 'Africa Nazarene University',
  },
  {
    years: '2015 – 2018',
    degree: 'KCSE Certificate',
    school: 'Maseno School',
  },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}
             className="edu-grid">

          <div className="reveal">
            <SectionLabel>Academic Background</SectionLabel>
            <SectionTitle>Education</SectionTitle>
            <GoldLine />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              Built on a foundation of rigorous academic study, blending business acumen with technological literacy — anchored by a commitment to strategic thinking and continuous learning.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, var(--gold), transparent)',
            }} />

            {EDUCATION.map((item, i) => (
              <div key={item.degree} className={`reveal reveal-delay-${i}`}
                   style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: '3rem' }}>
                {/* Diamond marker */}
                <div style={{
                  position: 'absolute', left: '-5px', top: '6px',
                  width: '11px', height: '11px',
                  border: '1px solid var(--gold)', background: 'var(--surface)',
                  transform: 'rotate(45deg)',
                }} />

                <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.4rem', display: 'block' }}>
                  {item.years}
                </span>
                <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.25rem', color: 'var(--text)', marginBottom: '0.2rem', fontWeight: 400 }}>
                  {item.degree}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.edu-grid{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </section>
  )
}

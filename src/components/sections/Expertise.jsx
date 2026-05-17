import { useState } from 'react'
import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'

const EXPERTISE = [
  {
    icon: '◈',
    title: 'Performance Management',
    desc: 'Designing systems that align individual output with organizational goals, creating cultures of measurable, sustained performance.',
  },
  {
    icon: '◉',
    title: 'Employee Onboarding & Development',
    desc: 'Crafting onboarding experiences that accelerate integration, build belonging, and reduce time-to-productivity for new talent.',
  },
  {
    icon: '◐',
    title: 'Training & Learning Strategy',
    desc: 'Architecting learning journeys that bridge skill gaps and create continuous development cultures within organizations.',
  },
  {
    icon: '◑',
    title: 'HR Policy Review & Design',
    desc: 'Auditing and redesigning HR policies to reflect organizational values, legal compliance, and practical usability for teams.',
  },
  {
    icon: '◎',
    title: 'Organizational Culture & Change',
    desc: 'Guiding organizations through transformation — building trust, managing resistance, and embedding lasting cultural change.',
  },
  {
    icon: '◇',
    title: 'Strategic HR Consulting',
    desc: 'Partnering with leaders to align human capital strategy with business objectives, unlocking organizational potential at every level.',
  },
]

export default function Expertise() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="expertise" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', textAlign: 'center', marginBottom: '3rem' }} className="reveal">
        <SectionLabel>What I Do</SectionLabel>
        <SectionTitle>Professional Expertise</SectionTitle>
        <GoldLine center />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border2)' }}
           className="expertise-grid">
        {EXPERTISE.map((item, i) => (
          <div
            key={item.title}
            className={`reveal reveal-delay-${i % 3}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? 'var(--surface)' : 'var(--dark)',
              padding: '2.5rem 2rem',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.3s',
            }}
          >
            {/* Top gold line on hover */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'var(--gold)',
              transform: hovered === i ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.35s ease',
            }} />

            <div style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: 'var(--gold-dim)' }}>
              {item.icon}
            </div>
            <h3 style={{
              fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem',
              marginBottom: '0.75rem', color: 'var(--text)', fontWeight: 400,
            }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.expertise-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

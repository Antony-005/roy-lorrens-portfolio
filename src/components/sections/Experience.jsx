import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'

const CASES = [
  {
    tag: 'Learning Strategy',
    title: 'Redesigning Employee Onboarding for a Corporate Client',
    body: 'The organization faced high early-turnover rates and new hires reporting poor role clarity within the first 90 days.',
    approach: 'Conducted a full audit of existing onboarding materials, mapped employee journey touchpoints, and co-designed a structured 90-day learning pathway with managers.',
    outcome: 'Improved 90-day retention and measurable gains in new hire engagement scores.',
  },
  {
    tag: 'Organizational Culture',
    title: 'Culture Diagnostic & Transformation Roadmap',
    body: 'A growing team experienced misalignment between stated values and day-to-day behavior, creating friction across departments.',
    approach: 'Facilitated focus groups, administered culture assessment tools, and produced a prioritized transformation roadmap with quick wins and long-term initiatives.',
    outcome: 'Leadership aligned on 3 core behavior shifts. Implementation plan adopted by HR committee.',
  },
  {
    tag: 'HR Policy',
    title: 'HR Policy Framework Review & Redesign',
    body: 'Outdated and inconsistently applied HR policies were creating confusion, compliance risk, and inequitable employee experiences.',
    approach: 'Reviewed existing policy library, benchmarked against best practices, and rewrote key policies in plain language with clear escalation procedures.',
    outcome: 'Modernized policy handbook adopted by management. Reduced policy-related grievances.',
  },
  {
    tag: 'Training Design',
    title: 'Leadership Development Workshop Series',
    body: 'Mid-level managers lacked structured development support, limiting their effectiveness and upward mobility within the organization.',
    approach: 'Designed and facilitated a 6-session leadership development programme covering communication, performance coaching, and strategic thinking.',
    outcome: 'Participants reported stronger confidence in team management. Two participants promoted within 6 months.',
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', marginBottom: '3rem' }} className="reveal">
        <SectionLabel>Work & Impact</SectionLabel>
        <SectionTitle>Case Studies</SectionTitle>
        <GoldLine />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: 'var(--border2)' }}
           className="cases-grid">
        {CASES.map((c, i) => (
          <div
            key={c.title}
            className={`reveal reveal-delay-${i % 2}`}
            style={{
              background: 'var(--surface)', padding: '2.5rem',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
          >
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', display: 'block' }}>
              {c.tag}
            </span>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.35rem', marginBottom: '0.75rem', color: 'var(--text)', fontWeight: 400 }}>
              {c.title}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
              {c.body}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Approach: </strong>{c.approach}
            </p>
            <div style={{
              fontSize: '0.8rem', color: 'var(--gold-dim)',
              borderTop: '1px solid var(--border2)', paddingTop: '1rem',
              display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
            }}>
              <span>⬡</span> <span>{c.outcome}</span>
            </div>
          </div>
        ))}
      </div>
      <style>{`@media(max-width:768px){.cases-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

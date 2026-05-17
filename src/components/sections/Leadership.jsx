import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'

// ─── LEADERSHIP ──────────────────────────────────────────
export default function Leadership() {
  return (
    <section id="leadership" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="reveal" style={{ marginBottom: '2.5rem' }}>
          <SectionLabel>Affiliations</SectionLabel>
          <SectionTitle>Leadership & Affiliations</SectionTitle>
          <GoldLine />
        </div>

        <div className="reveal" style={{
          border: '1px solid var(--border)', padding: '3rem',
          display: 'grid', gridTemplateColumns: 'auto 1fr',
          gap: '2.5rem', alignItems: 'center', background: 'var(--surface)',
        }}>
          <div style={{
            width: '80px', height: '80px', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: 'var(--gold)',
            flexShrink: 0,
          }}>
            VRF
          </div>
          <div>
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.4rem', display: 'block' }}>
              Secretary
            </span>
            <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.6rem', color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 300 }}>
              Vibrant Research Forum 101
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.75 }}>
              Supporting knowledge-sharing, research collaboration, and intellectual engagement initiatives that connect professionals and academics across disciplines. The Forum advances evidence-based thinking and community-driven inquiry.
            </p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:600px){#leadership .reveal[style*="grid"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  )
}

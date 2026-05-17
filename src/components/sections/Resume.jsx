import { FiDownload } from 'react-icons/fi'
import { SectionLabel, SectionTitle } from '@ui/Divider'

export default function Resume() {
  return (
    <section id="resume" style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="reveal" style={{
          textAlign: 'center', padding: '5rem 2rem',
          border: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
        }}>
          {/* Ghost text */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(6rem, 18vw, 14rem)', fontWeight: 300,
            color: 'rgba(201,168,76,0.03)', userSelect: 'none',
            letterSpacing: '-0.05em', whiteSpace: 'nowrap',
          }}>
            CV
          </div>

          <div style={{ position: 'relative' }}>
            <SectionLabel>Download</SectionLabel>
            <SectionTitle style={{ marginBottom: '0.75rem' }}>Curriculum Vitae</SectionTitle>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
              A full record of Roy's academic, professional, and creative journey.
            </p>
            <a
              href="/roy-lorrens-cv.pdf"
              download
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
            >
              <FiDownload size={16} />
              Download CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

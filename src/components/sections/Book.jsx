import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'
import cover from '../../assets/images/chasing-ayana-cover.jpg'

export default function Book() {
  return (
    <section id="book" style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          className="book-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'center' }}
        >

          {/* Book Cover */}
          <div className="reveal">
            <div style={{
              aspectRatio: '2/3',
              maxHeight: '460px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            }}>
              <img
                src={cover}
                alt="Chasing Ayana Book Cover"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1">
            <SectionLabel>Literary Work</SectionLabel>

            <SectionTitle>
              Chasing{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Ayana</em>
            </SectionTitle>

            <GoldLine />

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
              A reflective narrative that moves through the landscapes of human
              connection, personal growth, and the elusive search for purpose.
              Chasing Ayana is a story that asks what we are truly chasing when
              we chase the things we love.
            </p>

            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.8 }}>
              Written with honesty and emotional precision, this debut work
              invites readers into a deeply human journey — where every choice,
              every relationship, and every moment of stillness carries weight.
            </p>

            {/* Quote */}
            <div style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: 'var(--text-muted)',
              borderLeft: '2px solid var(--gold)',
              paddingLeft: '1.5rem',
              margin: '2rem 0',
              lineHeight: 1.7,
            }}>
              "Some journeys are not about the destination. They are about
              finally learning to see yourself clearly."
            </div>

            <a
              href="https://www.amazon.com/Chasing-Ayana-Story-Betrayal-Discovery/dp/B0G445JC3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get the Book on Amazon
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .book-grid{ grid-template-columns:1fr!important; gap:3rem!important; }
        }
      `}</style>
    </section>
  )
}
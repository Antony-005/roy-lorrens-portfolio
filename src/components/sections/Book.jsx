import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'
import coverAyana from '../../assets/images/chasing-ayana-cover.jpg'
import coverHR from '../../assets/images/why-human-resource-cover.jpg'

const BOOKS = [
  {
    cover: coverAyana,
    alt: 'Chasing Ayana Book Cover',
    label: 'Literary Work',
    title: 'Chasing',
    titleEm: 'Ayana',
    authors: 'Roy Lorrens Odhiambo',
    description1: 'A reflective narrative that moves through the landscapes of human connection, personal growth, and the elusive search for purpose. Chasing Ayana is a story that asks what we are truly chasing when we chase the things we love.',
    description2: 'Written with honesty and emotional precision, this debut work invites readers into a deeply human journey — where every choice, every relationship, and every moment of stillness carries weight.',
    quote: 'Some journeys are not about the destination. They are about finally learning to see yourself clearly.',
    link: 'https://www.amazon.com/Chasing-Ayana-Story-Betrayal-Discovery/dp/B0G445JC3F',
    linkText: 'Get the Book on Amazon',
  },
  {
    cover: coverHR,
    alt: 'Why Human Resource Book Cover',
    label: 'Professional Work',
    title: 'Why Human',
    titleEm: 'Resource',
    authors: 'Robert Owuor & Roy Lorrens Odhiambo',
    description1: 'Why Human Resource offers a timely and deeply important response to this question. At its core, this book reminds us that organizations thrive not simply because of systems, policies, technology, or strategy, but because of people.',
    description2: 'It calls us back to the very foundation of the Human Resource profession: the human being.',
    quote: 'Organizations are made of people. And people are not machines.',
    link: 'https://www.amazon.com',
    linkText: 'Get the Book on Amazon',
  },
]

export default function Book() {
  return (
    <section id="book" style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <SectionLabel>Published Works</SectionLabel>
          <SectionTitle>Books</SectionTitle>
          <GoldLine />
        </div>

        <div
          className="books-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            background: 'var(--border2)',
          }}
        >
          {BOOKS.map((book, i) => (
            <div
              key={book.alt}
              className={'reveal reveal-delay-' + i}
              style={{
                background: 'var(--dark)',
                padding: '3rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{
                aspectRatio: '2/3',
                maxHeight: '340px',
                width: '60%',
                margin: '0 auto 2.5rem',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              }}>
                <img
                  src={book.cover}
                  alt={book.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>

              <SectionLabel>{book.label}</SectionLabel>

              <h3 style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                fontWeight: 300,
                color: 'var(--text)',
                marginBottom: '0.25rem',
                lineHeight: 1.15,
              }}>
                {book.title}{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{book.titleEm}</em>
              </h3>

              <p style={{
                fontSize: '0.78rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
              }}>
                {book.authors}
              </p>

              <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '1.5rem' }} />

              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.8 }}>
                {book.description1}
              </p>

              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.8 }}>
                {book.description2}
              </p>

              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: 'var(--text-muted)',
                borderLeft: '2px solid var(--gold)',
                paddingLeft: '1.25rem',
                margin: '1.5rem 0',
                lineHeight: 1.7,
                flexGrow: 1,
              }}>
                "{book.quote}"
              </div>

              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
              >
                {book.linkText}
              </a>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media(max-width:768px){
          .books-grid{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
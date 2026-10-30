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
    link: 'https://www.amazon.com/Why-Human-Resource-Reclaiming-Humanity-ebook/dp/B0HBQTGRSN',
    linkText: 'Get the Book on Amazon',
  },
]

export default function Book() {
  return (
    <section id="book" style={{ padding: '6rem 0', background: 'var(--surface)' }}>
      <div className="wrap">

        <div className="reveal book-head">
          <SectionLabel>Published Works</SectionLabel>
          <SectionTitle>Books</SectionTitle>
          <GoldLine />
        </div>

        <div className="books-grid">
          {BOOKS.map((book, i) => (
            <div
              key={book.alt}
              className={'reveal reveal-delay-' + (i + 1) + ' book-card'}
            >
              <div className="book-cover">
                <img
                  src={book.cover}
                  alt={book.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>

              <SectionLabel>{book.label}</SectionLabel>

              <h3 className="book-title">
                {book.title}{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{book.titleEm}</em>
              </h3>

              <p className="book-authors">{book.authors}</p>

              <div className="book-rule" />

              <p className="book-desc">{book.description1}</p>
              <p className="book-desc book-desc-last">{book.description2}</p>

              <div className="book-quote">"{book.quote}"</div>

              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary book-btn"
              >
                {book.linkText}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
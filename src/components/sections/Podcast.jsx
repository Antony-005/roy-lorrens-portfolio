import { FiPlay, FiExternalLink } from 'react-icons/fi'
import { SectionLabel, SectionTitle, GoldLine } from '@ui/Divider'

const EPISODES = [
  { num: '01', title: 'Before the Title', guest: 'Robert Owuor' },
  { num: '02', title: 'Beyond the Title', guest: 'Robert Owuor' },
  { num: '03', title: 'Humans vs Giraffes', guest: 'Emmanuel Ngumbi' },
]

export default function Podcast() {
  return (
    <section id="podcast" style={{ padding: '6rem 0' }}>
      <div className="wrap">
        <div className="reveal">
          <SectionLabel>Media</SectionLabel>
          <SectionTitle>AR-EL Podcast</SectionTitle>
          <GoldLine />
        </div>

        {/* Hero Card */}
        <div className="reveal podcast-card">
          {/* Cover art */}
          <div className="podcast-cover">
            <div className="podcast-cover-play">
              <FiPlay size={20} />
            </div>
            <div className="podcast-cover-name">AR-EL</div>
            <div className="podcast-cover-sub">Podcast</div>
          </div>

          {/* Info */}
          <div style={{ minWidth: 0 }}>
            <h3 className="podcast-title">AR-EL Podcast</h3>
            <p className="podcast-desc">
              A leadership and learning podcast exploring life lessons, strategy, and professional growth through honest conversations with professionals and thought leaders shaping their fields.
            </p>
            <div className="podcast-btns">
              <a href="https://www.youtube.com/@rlodhiambo" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Watch Episodes <FiExternalLink size={14} />
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>

        {/* Episodes */}
        <div className="episodes-grid">
          {EPISODES.map((ep, i) => (
            <div
              key={ep.num}
              className={'reveal reveal-delay-' + (i + 1) + ' episode-card'}
            >
              <div style={{ minWidth: 0 }}>
                <span className="episode-num">Episode {ep.num}</span>
                <h4 className="episode-title">{ep.title}</h4>
                <p className="episode-guest">Guest: {ep.guest}</p>
              </div>
              <button className="episode-play" aria-label={'Play episode ' + ep.num}>
                <FiPlay size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
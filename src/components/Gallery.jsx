import { GALLERY_ITEMS } from '../data'
import './Gallery.css'

const STATS = [
  ['6+',   'Editions'],
  ['500+', 'Competitors'],
  ['200+', 'Moments Captured'],
  ['50+',  'Awards Given'],
]

function Gallery() {
  const doubled = [...GALLERY_ITEMS, ...GALLERY_ITEMS]
  return (
    <section id="gallery" className="gallery-section">
      <div className="section-inner" style={{ paddingBottom: '2rem' }}>
        <div className="section-header">
          <span className="section-eyebrow">Through the Years</span>
          <h2 className="section-title">A Legacy in Frames</h2>
          <div className="section-line" />
          <p className="section-desc">
            From Aurora 2022 to Aurora 2024 — six editions of breakthroughs, late nights,
            fierce competition, and unforgettable moments, captured forever.
          </p>
        </div>
        <div className="gallery-stats">
          {STATS.map(([n, l]) => (
            <div key={l} className="stat-item">
              <span className="stat-number">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-marquee-wrap">
        <div className="gallery-track">
          {doubled.map((item, i) => (
            <div key={i} className="gallery-img">
              {item.src
                ? <img src={item.src} alt={item.label} />
                : (
                  <div className="gallery-img-inner">
                    <span className="gallery-img-icon">{item.icon}</span>
                    <span>{item.label}</span>
                    <span className="gallery-img-year">{item.year}</span>
                  </div>
                )
              }
            </div>
          ))}
        </div>
      </div>

      <div className="section-inner" style={{ paddingTop: '2rem' }}>
        <p className="gallery-hint">
          Replace placeholder cards with your actual event photos — add a <code>src</code> field
          to each item in <code>src/data/index.js</code> and place images in <code>public/photos/</code>.
        </p>
      </div>
    </section>
  )
}

export default Gallery

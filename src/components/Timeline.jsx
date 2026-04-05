import { TIMELINE } from '../data'
import './Timeline.css'

function Timeline() {
  return (
    <section id="timeline" className="timeline-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Important Dates</span>
          <h2 className="section-title">Event Timeline of Aurora 2026</h2>
          <div className="section-line" />
        </div>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div key={i} className="timeline-item">
              {i % 2 === 0 ? (
                <>
                  <div className="tl-content tl-content--left">
                    <div className="tl-date">{item.date}</div>
                    <div className="tl-title">{item.title}</div>
                    <div className="tl-desc">{item.desc}</div>
                  </div>
                  <div className="tl-center"><div className="tl-dot"><span>{i + 1}</span></div></div>
                  <div className="tl-empty" />
                </>
              ) : (
                <>
                  <div className="tl-empty" />
                  <div className="tl-center"><div className="tl-dot"><span>{i + 1}</span></div></div>
                  <div className="tl-content tl-content--right">
                    <div className="tl-date">{item.date}</div>
                    <div className="tl-title">{item.title}</div>
                    <div className="tl-desc">{item.desc}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

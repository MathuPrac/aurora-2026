import { EVENTS } from '../data'
import './Events.css'

function Events() {
  return (
    <section id="events" className="events-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Competition Tracks</span>
          <h2 className="section-title">Competition Flow</h2>
          <div className="section-line" />
          <p className="section-desc">Aurora 2026 challenges participants to design, build, and defend AI systems that stand at the intersection of Agentic AI and Social Engineering.</p>
        </div>
        <div className="events-grid">
          {EVENTS.map(e => (
            <div key={e.name} className="event-card">
              <div className="event-card-glow" />
              <span className="event-dept">{e.dept}</span>
              <h3>{e.name}</h3>
              <p>{e.desc}</p>
              <span className="event-tag">{e.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events

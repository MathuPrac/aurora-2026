import { EVENTS } from '../data'
import './Events.css'

function Events() {
  // Separate undergraduate and school competitions
  const undergradMain = EVENTS[0] // Agentic AI Challenge
  const undergradStages = EVENTS.slice(1, 4) // Stages 1-3
  const schoolComps = EVENTS.slice(4) // School competitions
  
  return (
    <section id="events" className="events-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Competition Tracks</span>
          <h2 className="section-title">Competition Flow</h2>
          <div className="section-line" />
          <p className="section-desc">Aurora 2026 challenges participants to design, build, and defend AI systems that stand at the intersection of Agentic AI and Social Engineering.</p>
        </div>
        
        {/* Undergraduate Competition Flow */}
        <div className="competition-flow-section">
          <svg className="flow-lines" viewBox="0 0 1000 500" preserveAspectRatio="none">
            {/* Lines from main card to stages */}
            <line x1="500" y1="120" x2="200" y2="350" className="connecting-line" />
            <line x1="500" y1="120" x2="500" y2="350" className="connecting-line" />
            <line x1="500" y1="120" x2="800" y2="350" className="connecting-line" />
            
            {/* Horizontal lines connecting stages */}
            <line x1="200" y1="350" x2="500" y2="350" className="connecting-line" />
            <line x1="500" y1="350" x2="800" y2="350" className="connecting-line" />
          </svg>
          
          <div className="main-competition-box">
            <div className="event-card main-card">
              <div className="event-card-glow" />
              <span className="event-dept">{undergradMain.dept}</span>
              <h3>{undergradMain.name}</h3>
              <p>{undergradMain.desc}</p>
              <span className="event-tag">{undergradMain.tag}</span>
            </div>
          </div>
          
          <div className="stages-flow">
            {undergradStages.map((stage, idx) => (
              <div key={stage.name} className="stage-card-wrapper">
                <div className="event-card stage-card">
                  <div className="event-card-glow" />
                  <span className="event-dept">{stage.dept}</span>
                  <h3>{stage.name}</h3>
                  <p>{stage.desc}</p>
                  <span className="event-tag">{stage.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* School Competitions */}
        <div className="school-competitions-section">
          <h3 className="school-comp-title">School Student Competitions</h3>
          <div className="events-grid school-grid">
            {schoolComps.map(e => (
              <div key={e.name} className="event-card">
                <div className="event-card-glow" />
                
                <h3>{e.name}</h3>
                <p>{e.desc}</p>
                <span className="event-tag">{e.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events

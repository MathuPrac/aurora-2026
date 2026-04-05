import { DEPARTMENTS } from '../data'
import './Departments.css'

function Departments() {
  return (
    <section id="departments" className="departments-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Participating Areas</span>
          <h2 className="section-title">Departments at the Forefront</h2>
          <div className="section-line" />
          <p className="section-desc">Aurora 2026 welcomes students across all computing disciplines — united by a shared passion for technology and innovation.</p>
        </div>
        <div className="dept-grid">
          {DEPARTMENTS.map(d => (
            <div key={d.name} className="dept-card">
              <span className="dept-icon">{d.icon}</span>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Departments

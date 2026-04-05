import { GUIDELINES } from '../data'
import './Guidelines.css'

function Guidelines() {
  return (
    <section id="guidelines" className="guidelines-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Rules &amp; Regulations</span>
          <h2 className="section-title">Competition Guidelines</h2>
          <div className="section-line" />
          <p className="section-desc">
            Aurora is built on integrity, innovation, and ethical responsibility.
            All participants are expected to uphold the highest standards throughout.
          </p>
        </div>
        <div className="guidelines-grid">
          <div className="guideline-group">
            <h3>Eligibility Criteria</h3>
            <ul className="guideline-list">
              {GUIDELINES.eligibility.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="guideline-group">
            <h3>Code of Conduct</h3>
            <ul className="guideline-list">
              {GUIDELINES.conduct.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guidelines

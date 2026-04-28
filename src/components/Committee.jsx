import { useState } from 'react'
import { COMMITTEES } from '../data'
import './Committee.css'

function Divider({ label }) {
  return (
    <div className="committee-divider">
      <div className="committee-divider-line" />
      <div className="committee-divider-label">{label}</div>
      <div className="committee-divider-line" />
    </div>
  )
}

function Committee() {
  const [active, setActive] = useState(COMMITTEES[0].id)
  const current = COMMITTEES.find(c => c.id === active)

  return (
    <section id="committee" className="committee-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">The People Behind Aurora</span>
          <h2 className="section-title">Organizing Committee</h2>
          <div className="section-line" />
          <p className="section-desc">Aurora 2026 is shaped by dedicated students of the Computer Science Association, University of Sri Jayewardenepura.</p>
        </div>

        <div className="committee-tabs">
          {COMMITTEES.map(c => (
            <button
              key={c.id}
              className={`committee-tab${active === c.id ? ' committee-tab--active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="committee-panel" key={active}>
          <Divider label="Committee Heads" />
          <div className="committee-heads">
            {current.heads.map((h, i) => (
              <div key={i} className="head-card">
                <div className="head-avatar-wrap">
                  <div className="head-avatar-ring" style={{ background: `conic-gradient(${current.color}, var(--gold-light), ${current.color})` }} />
                  <div className="head-avatar">
                    {h.img
                      ? <img src={h.img} alt={h.name} />
                      : <div className="head-avatar-placeholder"><span>👤</span><span>Photo</span></div>
                    }
                  </div>
                </div>
                <span className="head-role">{h.role}</span>
                <div className="head-name">{h.name}</div>
                <div className="head-dept">{h.dept}</div>
              </div>
            ))}
          </div>

          {current.members.length > 0 && (
            <>
              <Divider label="Members" />
              <div className="members-grid">
                {current.members.map((m, i) => (
                  <div key={i} className="member-card">
                    <div className="member-avatar">
                      {m.img ? <img src={m.img} alt={m.name} /> : '👤'}
                    </div>
                    <div className="member-name">{m.name}</div>
                    <div className="member-role-tag">Member</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Committee

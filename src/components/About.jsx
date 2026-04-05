import './About.css'

const MOTIVES = [
  { icon: '🤖', title: 'Agentic AI',       desc: 'Explore autonomous AI systems capable of detecting and responding to social engineering threats in real time.' },
  { icon: '🛡️', title: 'Cyber Awareness',  desc: 'Build skills to identify phishing, fake urgency, and authority manipulation — the frontline of digital safety.' },
  { icon: '🏅', title: 'Earn Recognition', desc: "Cash prizes, certificates, and a place in Aurora's hall of excellence for the brightest minds in Sri Lanka." },
  { icon: '🌍', title: 'Industry Connect', desc: 'Interface with tech leaders from Rootcode, Virtusa, theAITeam, and more — unlock real career pathways.' },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text">
            <h3>What is Aurora?</h3>
            <p>Aurora is the annual Conference on Computer Science organised by the Computer Science Association in collaboration with the Department of Computer Science, University of Sri Jayewardenepura.</p>
            <p>Aurora 2026 focuses on <strong>Agentic AI and Social Engineering</strong> — exploring how autonomous AI systems intersect with human behaviour, security, and ethical responsibility in modern computing.</p>
            <p>The event comprises two key segments: <strong>The Conference</strong> featuring keynote speeches, expert panels, and workshops; and <strong>The Competition</strong>, challenging participants to apply knowledge in innovative, time-bound scenarios.</p>
            <div className="about-stats">
              {[['6+','Editions'],['500+','Past Competitors'],['10+','Industry Partners']].map(([n,l]) => (
                <div key={l} className="about-stat">
                  <div className="about-stat-number">{n}</div>
                  <div className="about-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="motives-grid">
            {MOTIVES.map(m => (
              <div key={m.title} className="motive-card">
                <span className="motive-icon">{m.icon}</span>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

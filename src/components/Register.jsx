import { useImplementationCta, useSchoolRegistrationCta } from '../hooks/useRegistrationCta'
import './Register.css'

function RegisterCard({ icon, badge, title, desc, details, cta, variant }) {
  return (
    <article className={`register-card register-card--${variant}${cta.isOpen ? ' is-open' : ''}${cta.isClosed ? ' is-closed' : ''}`}>
      <div className="register-card-header">
        <span className="register-card-icon" aria-hidden="true">{icon}</span>
        <span className="register-card-badge">{badge}</span>
      </div>
      <h3 className="register-card-title">{title}</h3>
      <p className="register-card-desc">{desc}</p>
      <ul className="register-card-details">
        {details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a
        href={cta.href}
        className={`register-card-btn${cta.isOpen ? ' is-active' : ' is-disabled'}`}
        onClick={cta.onClick}
        aria-disabled={cta['aria-disabled']}
        tabIndex={cta.tabIndex}
        target={cta.isOpen ? '_blank' : undefined}
        rel={cta.isOpen ? 'noopener noreferrer' : undefined}
      >
        <img src="/ico.google.svg" alt="" className="register-card-google-icon" />
        {cta.label}
      </a>
      {cta.isOpen && <span className="register-card-status">Registration open</span>}
      {cta.isClosed && <span className="register-card-status register-card-status--closed">Registration closed</span>}
      {!cta.isOpen && !cta.isClosed && <span className="register-card-status register-card-status--pending">Opens soon</span>}
    </article>
  )
}

function Register() {
  const implementationCta = useImplementationCta()
  const schoolCta = useSchoolRegistrationCta()

  return (
    <section id="register" className="register-section">
      <div className="register-inner">
        <div className="section-header">
          <span className="section-eyebrow">Registration</span>
          <h2 className="section-title">Ready to Compete?</h2>
          <div className="section-line" />
          <p className="section-desc">
            Two tracks, one mission — pick the path that fits you and register through Google Forms.
            Free to enter · Organised by CSA, University of Sri Jayewardenepura.
          </p>
        </div>

        <div className="register-grid">
          <RegisterCard
            variant="undergrad"
            icon="🎓"
            badge="Undergraduate Track"
            title="Implementation Submission"
            desc="Submit your 5–8 page proposal covering problem statement, agentic AI architecture, ethical safeguards, and expected impact."
            details={[
              '4-member teams from any university',
              'Stage 1: PDF proposal submission',
              'Top teams advance to prototype phase',
            ]}
            cta={implementationCta}
          />
          <RegisterCard
            variant="school"
            icon="🏫"
            badge="School Track"
            title="School Student Registration"
            desc="Join interactive workshops on Agentic AI and Social Engineering, then compete in quiz and creative design challenges."
            details={[
              'Open to school students',
              'Workshop, quiz & creative design',
              'Jun 24 – Jun 30 registration window',
            ]}
            cta={schoolCta}
          />
        </div>

        <p className="register-terms">
          By registering you agree to Aurora&apos;26 Terms &amp; Competition Guidelines
        </p>
      </div>
    </section>
  )
}

export default Register

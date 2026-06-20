import { useEffect, useRef } from 'react'
import { useImplementationCta, useSchoolRegistrationCta } from '../hooks/useRegistrationCta'
import './Hero.css'

function RegistrationCard({ badge, title, desc, audience, cta, variant }) {
  return (
    <article className={`hero-reg-card hero-reg-card--${variant}${cta.isOpen ? ' is-open' : ''}${cta.isClosed ? ' is-closed' : ''}`}>
      <span className="hero-reg-badge">{badge}</span>
      <h3 className="hero-reg-title">{title}</h3>
      <p className="hero-reg-desc">{desc}</p>
      <span className="hero-reg-audience">{audience}</span>
      <a
        href={cta.href}
        className={`hero-reg-btn${cta.isOpen ? ' is-active' : ' is-disabled'}`}
        onClick={cta.onClick}
        aria-disabled={cta['aria-disabled']}
        tabIndex={cta.tabIndex}
        target={cta.isOpen ? '_blank' : undefined}
        rel={cta.isOpen ? 'noopener noreferrer' : undefined}
      >
        {cta.label}
        {cta.isOpen && <span className="hero-reg-btn-arrow" aria-hidden="true">→</span>}
      </a>
    </article>
  )
}

function Hero() {
  const videoRef = useRef(null)
  const implementationCta = useImplementationCta()
  const schoolCta = useSchoolRegistrationCta()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline>
        <source src="/PixVerse_V6_Transition_720P_make_the_aurora_mo.mp4" type="video/mp4" />
      </video>
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="aurora-glow" />
      <img src="/logo1.png" alt="Aurora outline" className="hero-aurora-outline" />

      <p className="hero-eyebrow">Aurora &apos;26 · University of Sri Jayewardenepura</p>

      <h1 className="hero-title">
        Agentic AI.<br />
        <span className="hero-title-accent">Real Impact.</span>
      </h1>

      <p className="hero-subtitle">
        Sri Lanka&apos;s premier computing conference and competition — explore autonomous AI,
        social engineering defence, and ethical innovation through keynotes, workshops, and live challenges.
      </p>

      <div className="hero-registrations">
        <p className="hero-registrations-label">Choose your path</p>
        <div className="hero-reg-grid">
          <RegistrationCard
            variant="undergrad"
            badge="Undergraduate"
            title="Agentic AI Challenge"
            desc="4-member teams · Submit proposals, build prototypes, and compete for top honours."
            audience="Open to university undergraduates"
            cta={implementationCta}
          />
          <RegistrationCard
            variant="school"
            badge="School Students"
            title="Workshop & Creative Design"
            desc="Interactive workshops, quizzes, and creative idea design for  students."
            audience="Open to school students"
            cta={schoolCta}
          />
        </div>
      </div>

      <div className="hero-buttons">
        <a href="#about" className="btn-secondary hero-details-btn">Explore the Event</a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  )
}

export default Hero

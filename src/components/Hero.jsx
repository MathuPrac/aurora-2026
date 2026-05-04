import { useEffect, useRef } from 'react'
import { useRegistrationCta } from '../hooks/useRegistrationCta'
import './Hero.css'

function Hero() {
  const videoRef = useRef(null)
  const registerCta = useRegistrationCta()

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

      <h1 className="hero-title">
       Step Into the Future.<br />Compete With the Best
      </h1>

      <p className="hero-subtitle">
Join researchers, innovators, and future tech leaders for an immersive experience featuring visionary keynote speeches, expert-led panels, hands-on workshops, and an exciting competition designed to challenge creativity, strategy, and technical excellence.</p>

      <p className="hero-tagline">Compete in Sri Lanka's premier university computing competition.</p>

      <div className="hero-buttons">
        <a
          href={registerCta.href}
          className={`btn-primary hero-register-cta${registerCta.isOpen ? ' is-active' : ' is-disabled'}`}
          onClick={registerCta.onClick}
          aria-disabled={registerCta['aria-disabled']}
          tabIndex={registerCta.tabIndex}
        >
          {registerCta.label}
        </a>
        <a href="#about" className="btn-secondary">See Details</a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  )
}

export default Hero

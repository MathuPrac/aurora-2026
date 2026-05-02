import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/PixVerse_V6_Transition_720P_make_the_aurora_mo.mp4" type="video/mp4" />
      </video>
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="aurora-glow" />

      <div className="hero-eyebrow">Conference on Computer Science</div>

      <h1 className="hero-title">
        <span className="hero-title-aurora">AURORA</span>
        <span className="hero-title-year">— '26 —</span>
      </h1>

      <p className="hero-subtitle">Where Brilliance Meets the Horizon</p>
      <p className="hero-tagline">Agentic AI · Social Engineering · Innovation</p>

      <div className="hero-meta">
        <div className="hero-meta-item">
          <span className="hero-meta-label">Conference Day</span>
          <span className="hero-meta-value">July 18, 2026</span>
        </div>
        {/* <div className="hero-meta-sep" /> */}
        <div className="hero-meta-item">
          <span className="hero-meta-label">Organised By</span>
          <span className="hero-meta-value" style={{ fontSize: '0.72rem', lineHeight: '1.4' }}>
            Computer Science Association<br />University of Sri Jayewardenepura
          </span>
        </div>
        {/* <div className="hero-meta-sep" />
        <div className="hero-meta-item">
          <span className="hero-meta-label">Theme</span>
          <span className="hero-meta-value">Agentic AI</span>
        </div> */}
      </div>

      <div className="hero-buttons">
        <a href="#register" className="btn-primary">Register via Google</a>
        <a href="#events" className="btn-secondary">Explore Events</a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  )
}

export default Hero

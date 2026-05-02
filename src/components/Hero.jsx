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

      <h1 className="hero-title">
        Where Agentic Intelligence Meets Human Behavior
      </h1>

      <p className="hero-subtitle">Step Into the Future. Compete With the Best.</p>



      <div className="hero-buttons">
        <a href="#register" className="btn-primary">Try Beta Access</a>
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

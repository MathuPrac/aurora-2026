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
       Step Into the Future. Compete With the Best
      </h1>

      <p className="hero-subtitle">Innovate. Secure. Transform.

Join researchers, innovators, and future tech leaders for an immersive experience featuring visionary keynote speeches, expert-led panels, hands-on workshops, and an exciting competition designed to challenge creativity, strategy, and technical excellence.</p>



      <div className="hero-buttons">
        <a href="#register" className="btn-primary">Register for Competition</a>
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

import { useState, useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
  const [timeLeft, setTimeLeft] = useState(25 * 3600) // 25 hours in seconds
  const videoRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section id="hero" className="hero">
      <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline>
        <source src="/PixVerse_V6_Transition_720P_make_the_aurora_mo.mp4" type="video/mp4" />
      </video>
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="aurora-glow" />
      <img src="/photos/aurora'26_outline.png" alt="Aurora outline" className="hero-aurora-outline" />

      <h1 className="hero-title">
       Step Into the Future.<br />Compete With the Best
      </h1>

      <p className="hero-subtitle">
Join researchers, innovators, and future tech leaders for an immersive experience featuring visionary keynote speeches, expert-led panels, hands-on workshops, and an exciting competition designed to challenge creativity, strategy, and technical excellence.</p>

      <p className="hero-tagline">Compete in Sri Lanka's premier university computing competition.</p>

      <div className="hero-buttons">
        <a href="#register" className="btn-primary">Register in {formatTime(timeLeft)}</a>
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

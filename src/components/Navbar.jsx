import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  ['About',      '#about'],
  ['Events',     '#events'],
  ['Timeline',   '#timeline'],
  ['Gallery',    '#gallery'],
  ['Committee',  '#committee'],
  ['Guidelines', '#guidelines'],
  ['FAQ',        '#faq'],
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">AURORA<span>'</span>26</a>

      <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
        {NAV_LINKS.map(([label, href]) => (
          <li key={label}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
        ))}
      </ul>

      <a href="#register" className="nav-cta" onClick={() => setMenuOpen(false)}>Register Now</a>

      <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}

export default Navbar

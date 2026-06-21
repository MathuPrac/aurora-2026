import { useState, useEffect } from 'react'
import { useSchoolRegistrationCta } from '../hooks/useRegistrationCta'
import './Navbar.css'

const NAV_LINKS = [
  ['About', '#about'],
  ['Gallery', '#gallery'],
  ['Competition', '#guidelines'],
  ['Committee', '#committee'],
  ['FAQ', '#faq'],
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const schoolCta = useSchoolRegistrationCta()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        <img src="/logo.png" alt="Aurora Logo" />
        <span className="nav-logo-text">AURORA</span>
      </a>

      <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
        {NAV_LINKS.map(([label, href]) => (
          <li key={label}><a href={href} onClick={closeMenu}>{label}</a></li>
        ))}
      </ul>

      <div className="nav-right-section">
        {schoolCta.isOpen ? (
          <a
            href={schoolCta.href}
            className="nav-cta nav-cta--school nav-cta--desktop-only"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <span className="nav-cta-full">School Registration</span>
            <span className="nav-cta-short">School Reg</span>
          </a>
        ) : (
          <a href="#register" className="nav-cta" onClick={closeMenu}>
            Register
          </a>
        )}
      </div>

      <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}

export default Navbar

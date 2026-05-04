import { useState, useEffect } from 'react'
import { useRegistrationCta } from '../hooks/useRegistrationCta'
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
  const registerCta = useRegistrationCta()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        <img src="/logo.png" alt="Aurora Logo" />
        <span className="nav-logo-text">AURORA</span>
      </a>

      <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
        {NAV_LINKS.map(([label, href]) => (
          <li key={label}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
        ))}
      </ul>

      <div className="nav-right-section">
        <a
          href={registerCta.href}
          className={`nav-cta${registerCta.isOpen ? ' is-active' : ' is-disabled'}`}
          onClick={(event) => {
            registerCta.onClick(event)
            if (registerCta.isOpen) {
              setMenuOpen(false)
            }
          }}
          aria-disabled={registerCta['aria-disabled']}
          tabIndex={registerCta.tabIndex}
        >
          {registerCta.label}
        </a>
      </div>

      <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}

export default Navbar

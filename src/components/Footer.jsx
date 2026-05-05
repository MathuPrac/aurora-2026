import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo.png" alt="Aurora Logo" />
          </div>
          <div className="footer-description">
            Annual Conference on Computer Science organised by the Computer Science Association in collaboration with the Department of Computer Science, University of Sri Jayewardenepura.
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <a href="#guidelines">Guidelines</a>
            <a href="#faq">FAQ</a>
            <a href="mailto:csa@sci.sjp.ac.lk">Contact</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/csa-usj/" aria-label="LinkedIn" className="social-link">
              <img src="/ico.linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/csa_usj?igsh=ZTVoMmk5azZ6eThl" aria-label="Instagram" className="social-link">
              <img src="/ico.insta.svg" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/csausj" aria-label="Facebook" className="social-link">
              <img src="/ico.facebook.svg" alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2026 Aurora — Conference on Computer Science · CSA, University of Sri Jayewardenepura
        </div>
      </div>
    </footer>
  )
}

export default Footer

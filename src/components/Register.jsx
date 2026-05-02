import './Register.css'

// 🔗 Replace with your actual Google Form URL
const GOOGLE_FORM_URL = 'https://forms.gle/your-google-form-link'

function Register() {
  return (
    <section id="register" className="register-section">
      <video className="register-video" autoPlay muted loop playsInline>
        <source src="/PixVerse_V6_Transition_720P_make_the_aurora_mo.mp4" type="video/mp4" />
      </video>
      <div className="register-inner">
        <p className="register-tagline">Your moment begins here.</p>
        <h2 className="register-title">Ready to <span>Illuminate</span>?</h2>
        <p className="register-note">
           Open to Undergraduates &amp; A/L Students · Free to enter
        </p>
        <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="register-google-btn">
          <img src="/ico.google.svg" alt="Google" className="google-icon" />
          Sign in &amp; Register with Google
        </a>
        <p className="register-terms">
          By registering you agree to Aurora'26 Terms &amp; Competition Guidelines ·
          Organised by CSA, University of Sri Jayewardenepura
        </p>
      </div>
    </section>
  )
}

export default Register

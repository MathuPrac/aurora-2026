import { useSchoolRegistrationCta } from '../hooks/useRegistrationCta'
import './MobileSchoolBar.css'

function MobileSchoolBar() {
  const schoolCta = useSchoolRegistrationCta()

  if (!schoolCta.isOpen) return null

  return (
    <a
      href={schoolCta.href}
      className="mobile-school-bar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="mobile-school-bar-label">School Registration Open</span>
      <span className="mobile-school-bar-action">Register →</span>
    </a>
  )
}

export default MobileSchoolBar

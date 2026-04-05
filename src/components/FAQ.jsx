import { useState } from 'react'
import { FAQS } from '../data'
import './FAQ.css'

function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="faq-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Common Questions</span>
          <h2 className="section-title">Frequently Asked</h2>
          <div className="section-line" />
        </div>
        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div key={i} className="faq-item">
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                {item.q}
                <span className={`faq-icon${open === i ? ' faq-icon--open' : ''}`}>+</span>
              </button>
              <div className={`faq-a${open === i ? ' faq-a--open' : ''}`}>{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

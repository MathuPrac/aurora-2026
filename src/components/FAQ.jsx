import { useState } from 'react'
import { FAQS } from '../data'
import './FAQ.css'

function FAQ() {
  const [open, setOpen] = useState(null)
  
  const stages = [
    { number: '1', title: 'Proposal Submission', desc: '5–8 page PDF' },
    { number: '2', title: 'Selection of Final 6 Teams', desc: 'Based on criteria' },
    { number: '3', title: 'Prototype & Evaluation', desc: 'GitHub + Demo video' },
    { number: '4', title: 'Final Presentation', desc: 'Live Q&A' },
  ]

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
              <div className={`faq-a${open === i ? ' faq-a--open' : ''}`}>
                {item.a}
                {open === i && i === 2 && (
                  <div className="faq-stages">
                    {stages.map((stage, idx) => (
                      <div key={idx} className="faq-stage">
                        <div className="faq-stage-number">{stage.number}</div>
                        <div className="faq-stage-title">{stage.title}</div>
                        <div className="faq-stage-desc">{stage.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

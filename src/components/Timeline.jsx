import { useEffect, useRef } from 'react'
import { TIMELINE } from '../data'
import './Timeline.css'

const TRACK_LABELS = {
  undergraduate: 'Undergraduate',
  school: 'School',
  conference: 'Conference',
}

function TimelineCard({ item, side }) {
  return (
    <div className={`tl-card tl-card--${side} tl-card--${item.track}`}>
      <div className="tl-card-top">
        <div className="tl-date-block">
          <span className="tl-date">{item.date}</span>
          <span className="tl-day">{item.day}</span>
        </div>
        <div className="tl-badges">
          <span className={`tl-track tl-track--${item.track}`}>{TRACK_LABELS[item.track]}</span>
          {item.duration && <span className="tl-duration">{item.duration}</span>}
        </div>
      </div>
      <h3 className="tl-title">{item.title}</h3>
      <p className="tl-desc">{item.desc}</p>
      {item.link && (
        <a
          href={item.link}
          className="tl-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.linkLabel}
          <span className="tl-link-arrow" aria-hidden="true">→</span>
        </a>
      )}
    </div>
  )
}

function Timeline() {
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="timeline" className="timeline-section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Important Dates</span>
          <h2 className="section-title">Aurora 2026 Timeline</h2>
          <div className="section-line" />
          <p className="section-desc">
            Key milestones from registration through competition to conference day.
            Registration links are available on the relevant dates below.
          </p>
        </div>

        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div
              key={`${item.date}-${item.title}`}
              className="timeline-item"
              ref={(el) => {
                itemRefs.current[i] = el
              }}
            >
              {i % 2 === 0 ? (
                <>
                  <TimelineCard item={item} side="left" />
                  <div className="tl-center">
                    <div className="tl-dot"><span>{i + 1}</span></div>
                  </div>
                  <div className="tl-empty" />
                </>
              ) : (
                <>
                  <div className="tl-empty" />
                  <div className="tl-center">
                    <div className="tl-dot"><span>{i + 1}</span></div>
                  </div>
                  <TimelineCard item={item} side="right" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

import { experience, education } from '../data/content'
import Reveal from './Reveal'

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <Reveal as="div" className="tl-item" key={item.title}>
          <span className="tl-date">{item.date}</span>
          <h3>{item.title}</h3>
          <div className="tl-org">{item.org}</div>
          <p className="tl-desc">{item.desc}</p>
        </Reveal>
      ))}
    </div>
  )
}

export default function ExperienceEducation() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Experience &amp; Education</span>
          <h2>Where I've been</h2>
        </div>
        <div className="two-col">
          <div>
            <h3 className="col-label">Experience</h3>
            <Timeline items={experience} />
          </div>
          <div id="education">
            <h3 className="col-label">Education</h3>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  )
}

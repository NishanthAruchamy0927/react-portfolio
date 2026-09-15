import { useState } from 'react'
import { skills, skillTabs } from '../data/content'

export default function Skills() {
  const [active, setActive] = useState(skillTabs[0].key)

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Skills</span>
          <h2>What I work with</h2>
          <p>
            A blend of software engineering and applied machine learning — from building
            interfaces to training models.
          </p>
        </div>

        <div className="skill-tabs" role="tablist">
          {skillTabs.map((tab) => (
            <button
              key={tab.key}
              className={`skill-tab ${active === tab.key ? 'active' : ''}`}
              onClick={() => setActive(tab.key)}
              role="tab"
              aria-selected={active === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="chip-grid">
          {skills[active].map((s) => (
            <div className="chip" key={s}>
              <span className="dot"></span>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

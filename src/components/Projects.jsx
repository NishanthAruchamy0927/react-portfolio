import { projects } from '../data/content'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Projects</span>
          <h2>Things I've built</h2>
          <p>A mix of full-stack applications and applied ML systems — each solving a specific, real problem.</p>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <Reveal as="div" className="project-card" key={p.name}>
              {p.featured && <span className="featured-badge">Flagship project</span>}
              <div className="project-top">
                <h3>{p.name}</h3>
                <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
              <p className="project-problem">{p.problem}</p>
              <p className="project-desc">{p.description}</p>
              <p className="project-contribution">
                <strong>My contribution:</strong> {p.contribution}
              </p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

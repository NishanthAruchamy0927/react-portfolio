import { profile } from '../data/content'
import Reveal from './Reveal'

export default function ResumeCta() {
  return (
    <section id="resume">
      <div className="wrap">
        <Reveal as="div" className="resume-banner">
          <div>
            <h2>Want the full picture?</h2>
            <p>Grab my resume for a complete breakdown of my experience, education, and technical skills.</p>
          </div>
          <a href={profile.resumeUrl} download className="btn btn-primary" style={{ flexShrink: 0 }}>
            Download resume
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

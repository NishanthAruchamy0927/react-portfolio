import { profile } from '../data/content'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">
            <span className="pulse"></span>Open to internships &amp; full-time roles
          </span>
          <h1>{profile.name}</h1>
          <p className="hero-role">
            Full-Stack Developer &amp; <span className="gradient-text">AI/ML Engineer</span>
          </p>
          <p className="hero-desc">
            I'm an M.Sc AI &amp; Machine Learning student who builds full-stack applications and
            data-driven systems — from ML-powered recommendation engines to fraud analytics
            dashboards — using Python, React, Node.js and modern ML tooling.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href="#resume" className="btn btn-outline">
              Download resume
            </a>
          </div>
          <div className="hero-socials">
            <a className="social-icon" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
            <a className="social-icon" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a className="social-icon" href={`mailto:${profile.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 6l-10 7L2 6" />
                <path d="M2 6h20v12H2z" />
              </svg>
            </a>
          </div>
        </div>

        <Reveal className="status-card">
          <div className="status-head">
            <span className="bars">
              <span></span>
              <span></span>
              <span></span>
            </span>
            status.json
          </div>
          <div className="row">
            <span className="label">Based in</span>
            <span className="value">Coimbatore, India</span>
          </div>
          <div className="row">
            <span className="label">Currently</span>
            <span className="value">M.Sc AI &amp; ML, CIT</span>
          </div>
          <div className="row">
            <span className="label">Focus areas</span>
            <span className="value">Full-stack · ML · Data</span>
          </div>
          <div className="row">
            <span className="label">Recent</span>
            <span className="value">Full-Stack Dev Intern</span>
          </div>
          <div className="row">
            <span className="label">Availability</span>
            <span className="status-live">
              <span className="pulse"></span>Open to roles
            </span>
          </div>
        </Reveal>
      </div>
    </header>
  )
}

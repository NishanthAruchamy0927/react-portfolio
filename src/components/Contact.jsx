import { profile } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Contact</span>
          <h2>Let's build something</h2>
          <p>
            Open to internship and full-time opportunities in full-stack development and applied
            AI/ML. Reach out — I reply quickly.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-list">
            <Reveal as="div" className="contact-row">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 6l-10 7L2 6" />
                  <path d="M2 6h20v12H2z" />
                </svg>
              </div>
              <div>
                <div className="label">Email</div>
                <a className="value" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>
            </Reveal>

            <Reveal as="div" className="contact-row">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="label">Phone</div>
                <a className="value" href="tel:+919677798131">
                  {profile.phone}
                </a>
              </div>
            </Reveal>

            <Reveal as="div" className="contact-row">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="label">Location</div>
                <span className="value">{profile.location}</span>
              </div>
            </Reveal>

            <Reveal as="div" className="contact-row">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </div>
              <div>
                <div className="label">LinkedIn</div>
                <a className="value" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  nishanth-a-s-aa7736356
                </a>
              </div>
            </Reveal>

            <Reveal as="div" className="contact-row">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
              </div>
              <div>
                <div className="label">GitHub</div>
                <a className="value" href={profile.github} target="_blank" rel="noopener noreferrer">
                  NishanthAruchamy0927
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal as="div" className="contact-card">
            <h3>Ready when you are.</h3>
            <p>
              The fastest way to reach me is email — I'm actively looking for internship and
              full-time roles in full-stack development and AI/ML.
            </p>
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Say hello
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

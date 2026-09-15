import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="wrap footer-inner">
        <span>© {year} {profile.name}. Built from scratch.</span>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <a href="#home" className="back-to-top" aria-label="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

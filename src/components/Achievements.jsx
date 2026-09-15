import { achievements } from '../data/content'
import Reveal from './Reveal'

const ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
    <path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>,
]

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag">Achievements</span>
          <h2>Recognition &amp; results</h2>
        </div>
        <div className="ach-grid">
          {achievements.map((a, i) => (
            <Reveal as="div" className="ach-card" key={a.title}>
              <div className="ach-icon">{ICONS[i % ICONS.length]}</div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

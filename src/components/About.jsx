import { facts } from '../data/content'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <span className="section-tag">About</span>
            <h2 style={{ marginBottom: 28 }}>Who I am</h2>
            <div className="about-text">
              <p>
                I'm a <strong>Full-Stack Developer</strong> and <strong>AI/ML Engineer</strong>{' '}
                currently pursuing my M.Sc in Artificial Intelligence and Machine Learning at
                Coimbatore Institute of Technology. I like building software that actually does
                something useful with data — whether that's a recommendation engine, a
                fraud-detection dashboard, or a clean CRUD app that solves a real workflow
                problem.
              </p>
              <p>
                My toolkit spans <strong>Python, Java, React, Flask, Node.js, Express.js and
                MongoDB</strong>, backed by a solid grounding in machine learning —{' '}
                <strong>NLP, Scikit-learn, XGBoost, LightGBM</strong> — and database design. I
                recently completed a Full-Stack Developer internship at Codec Technologies, where
                I worked in a mentor-reviewed, industry-simulated environment on real application
                features and code review standards.
              </p>
              <p>
                Outside of coursework and projects, I lead as Secretary of my college's Nature
                Club and Editor Head of the Women Empowerment Cell — I enjoy contributing beyond
                just code.
              </p>
            </div>
          </div>
          <div className="about-facts">
            {facts.map((f) => (
              <div className="fact-card" key={f.label}>
                <div className="num">{f.num}</div>
                <div className="cap">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

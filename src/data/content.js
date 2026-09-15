export const profile = {
  name: 'Nishanth A S',
  role: 'Full-Stack Developer & AI/ML Engineer',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'nishanthlakshanth@gmail.com',
  phone: '+91 96777 98131',
  github: 'https://github.com/NishanthAruchamy0927',
  linkedin: 'https://linkedin.com/in/nishanth-a-s-aa7736356',
  resumeUrl: '/resume.pdf', // replace with your final resume file in /public
}

export const facts = [
  { num: '8.1', label: 'CGPA — M.Sc AIML' },
  { num: '5', label: 'Projects built end-to-end' },
  { num: '3', label: 'Hackathon & competition results' },
  { num: '2', label: 'Leadership roles held' },
]

export const skills = {
  programming: ['C', 'Python', 'R'],
  web: ['HTML', 'CSS', 'JavaScript', 'React.js (basic)', 'Flask (basic)', 'Node.js', 'Express.js'],
  database: ['MySQL', 'Oracle', 'MongoDB'],
  aiml: ['NumPy', 'Pandas', 'NLP', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Ensemble Learning', 'Feature Engineering'],
  tools: ['Flask', 'FastAPI', 'Streamlit', 'Gradio', 'Hugging Face Spaces', 'Docker'],
  other: ['Leadership', 'Adaptability', 'Time Management'],
}

export const skillTabs = [
  { key: 'programming', label: 'Programming' },
  { key: 'web', label: 'Web Development' },
  { key: 'database', label: 'Database' },
  { key: 'aiml', label: 'AI & ML' },
  { key: 'tools', label: 'Tools & Deployment' },
  { key: 'other', label: 'Other' },
]

export const projects = [
  {
    name: 'Scheme Saathi',
    featured: true,
    problem: 'Government scheme simplifier',
    description:
      "Many citizens struggle to discover and understand government welfare schemes they're eligible for. Scheme Saathi recommends relevant schemes, predicts eligibility, and answers questions through a chatbot.",
    contribution:
      'Built the ML pipeline (TF-IDF, cosine similarity, Random Forest classification, NLP intent classification) on 5,000 synthetic samples, and the full-stack backend for scheme search and user management.',
    tags: ['Python', 'Flask', 'React', 'MongoDB', 'Scikit-learn', 'NLP'],
    link: 'https://github.com/NishanthAruchamy0927',
  },
  {
    name: 'Sentinel',
    problem: 'Fraud operations console',
    description:
      'Fraud analysts need real-time visibility into suspicious transactions. Sentinel is a monitoring dashboard for anomaly detection, risk analytics, and KPI tracking to support faster, data-driven decisions.',
    contribution:
      'Built the backend APIs, synthetic data generation, and in-memory session management to simulate end-to-end fraud detection and analyst workflows, plus the visualization layer for KPIs.',
    tags: ['Python', 'Data Viz', 'Anomaly Detection', 'REST APIs'],
    link: 'https://github.com/NishanthAruchamy0927',
  },
  {
    name: 'Network Intrusion Detection System',
    problem: 'Network traffic anomaly classification',
    description:
      'Distinguishing normal network traffic from malicious activity at scale is a core cybersecurity challenge. This system classifies traffic patterns to flag likely attacks.',
    contribution:
      'Handled data preprocessing, feature extraction, and supervised model training, then evaluated performance and accuracy to separate normal from attack traffic.',
    tags: ['Python', 'Scikit-learn', 'Feature Engineering', 'Supervised Learning'],
    link: 'https://github.com/NishanthAruchamy0927',
  },
  {
    name: 'MediAssist',
    problem: 'Healthcare information assistance',
    description:
      'Finding reliable, relevant medicine information and consultation guidance can be confusing. MediAssist is a Python-based assistant that surfaces structured, rule-based recommendations.',
    contribution:
      'Built the recommendation logic, structured data management, and an HTML-based interface, iterating on rule-based analysis to improve recommendation accuracy.',
    tags: ['Python', 'Rule-based Systems', 'HTML', 'Data Management'],
    link: 'https://github.com/NishanthAruchamy0927',
  },
  {
    name: 'MERN Todo App',
    problem: 'Everyday task management',
    description:
      'A full-stack task manager that keeps tasks organized by today/upcoming, so users can track and prioritize work without friction.',
    contribution:
      'Built the complete MERN stack app — RESTful APIs, CRUD operations, and a database schema structured to support future data visualization.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    link: 'https://github.com/NishanthAruchamy0927',
  },
]

export const experience = [
  {
    date: '05/2026 – 06/2026',
    title: 'Full-Stack Developer Intern',
    org: 'Codec Technologies Pvt. Ltd. · Remote',
    desc: 'Completed an AICTE & ICAC-approved internship building and testing a full-stack application in an industry-simulated, mentor-reviewed environment. Collaborated in a mentor-reviewed workflow to design, implement, and debug application features, gaining hands-on exposure to real-world development practices and code review standards.',
  },
  {
    date: '06/2026 – Present',
    title: 'Secretary, Nature Club',
    org: 'Coimbatore Institute of Technology',
    desc: 'Participate in environmental awareness and sustainability activities, developing teamwork and leadership skills.',
  },
  {
    date: '06/2026 – Present',
    title: 'Editor Head, Women Empowerment Cell',
    org: 'Coimbatore Institute of Technology',
    desc: "Contribute editorial leadership to the cell's initiatives and communications.",
  },
]

export const education = [
  {
    date: '2024 – Present',
    title: 'M.Sc Artificial Intelligence & Machine Learning',
    org: 'Coimbatore Institute of Technology',
    desc: 'CGPA: 8.1. Focused on machine learning, data analysis, and applied AI systems alongside full-stack development.',
  },
  {
    date: 'Completed',
    title: 'SSLC & HSC',
    org: 'Sri Chaitanya Techno School, Coimbatore',
    desc: 'SSLC: 90% · HSC: 80%',
  },
]

export const achievements = [
  {
    title: 'Runner-up — INNOVATX 2026',
    desc: 'AI Hackathon hosted at Coimbatore Institute of Technology.',
  },
  {
    title: 'Special Mention — Regional AI Full Stack Innovation Summit 2026',
    desc: 'Awarded with a summer internship offer from YuvaSoft.',
  },
  {
    title: 'Finalist — Code Clash',
    desc: 'Organized by the Software Development Cell (SDC), CIT.',
  },
]

import profileLogo from '../assets/profile-logo.png';

const About = () => {
  const skills = ['Java', 'Spring Boot', 'React', 'JavaScript', 'MySQL', 'PostgreSQL', 'Docker', 'Git', 'REST APIs', 'Microservices'];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>

        <div className="about-grid">
          {/* Profile Card */}
          <div className="profile-card glass">
            <div className="profile-header">
              <div className="avatar">
                <img src={profileLogo} alt="Himanshu Gupta" className="profile-logo" />
              </div>
              <div className="status-indicator"></div>
            </div>
            <h3>Himanshu Gupta</h3>
            <p className="role">Full Stack Developer</p>
            <p className="bio">
              Passionate software developer with expertise in building scalable web applications
              using modern technologies. Experienced in both frontend and backend development,
              with a strong foundation in Java, Spring Boot, and React.
            </p>
          </div>

          {/* Skills Card */}
          <div className="skills-card glass">
            <div className="card-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <h3>Tech Stack</h3>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-dot"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="timeline-section">
          <div className="section-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <h3>Education</h3>
          </div>

          <div className="education-grid">
            <div className="education-card glass">
              <div className="edu-icon">🎓</div>
              <h4>Dr. A.P.J. Abdul Kalam Technical University</h4>
              <p className="degree">B.Tech in Computer Science</p>
              <p className="year">2022 - 2026</p>
            </div>
            <div className="education-card glass">
              <div className="edu-icon">📚</div>
              <h4>Government Industrial Training Institute</h4>
              <p className="degree">Diploma of Education</p>
              <p className="year">2019 - 2022</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, transparent 0%, rgba(102, 126, 234, 0.03) 100%);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xl);
          margin-bottom: var(--space-3xl);
        }

        .profile-card, .skills-card {
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          transition: var(--transition);
        }

        .profile-card:hover, .skills-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .profile-header {
          text-align: center;
          margin-bottom: var(--space-xl);
        }

        .avatar-wrapper {
          position: relative;
          display: inline-block;
          margin-bottom: var(--space-lg);
        }

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .profile-logo {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }

        .status-indicator {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 20px;
          height: 20px;
          background: #10b981;
          border: 3px solid var(--color-bg);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
          }
        }

        .profile-header h3 {
          font-size: var(--text-2xl);
          font-weight: 700;
          margin-bottom: var(--space-xs);
        }

        .role {
          color: var(--color-primary);
          font-weight: 600;
          font-size: var(--text-lg);
        }

        .profile-bio p {
          color: var(--color-text-muted);
          line-height: 1.8;
          margin-bottom: var(--space-lg);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
        }

        .card-header svg {
          color: var(--color-primary);
        }

        .card-header h3 {
          font-size: var(--text-2xl);
          font-weight: 700;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-md);
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-md);
          background: rgba(255, 255, 255, 0.02);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition);
          font-weight: 500;
        }

        .skill-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--color-primary);
          transform: translateX(5px);
        }

        .skill-dot {
          width: 8px;
          height: 8px;
          background: var(--color-primary);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .timeline-section {
          margin-bottom: var(--space-3xl);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-2xl);
        }

        .section-header svg {
          color: var(--color-primary);
        }

        .section-header h3 {
          font-size: var(--text-3xl);
          font-weight: 700;
        }

        .timeline {
          position: relative;
        }

        .timeline-item {
          position: relative;
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          transition: var(--transition);
        }

        .timeline-item:hover {
          transform: translateX(10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .timeline-marker {
          position: absolute;
          left: -40px;
          top: 30px;
          width: 16px;
          height: 16px;
          background: var(--color-primary);
          border-radius: 50%;
          border: 4px solid var(--color-bg);
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-lg);
          gap: var(--space-lg);
        }

        .timeline-header h4 {
          font-size: var(--text-xl);
          font-weight: 700;
          margin-bottom: var(--space-xs);
        }

        .company {
          color: var(--color-primary);
          font-weight: 600;
          font-size: var(--text-base);
        }

        .duration {
          color: var(--color-text-muted);
          font-size: var(--text-sm);
          white-space: nowrap;
          padding: var(--space-xs) var(--space-md);
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-full);
        }

        .timeline-points {
          list-style: none;
          margin-bottom: var(--space-lg);
        }

        .timeline-points li {
          color: var(--color-text-muted);
          margin-bottom: var(--space-md);
          padding-left: var(--space-lg);
          position: relative;
          line-height: 1.7;
        }

        .timeline-points li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: 700;
        }

        .certificate-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-sm) var(--space-lg);
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid var(--color-primary);
          border-radius: var(--radius-full);
          color: var(--color-primary);
          font-weight: 600;
          font-size: var(--text-sm);
          transition: var(--transition);
        }

        .certificate-btn:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-xl);
        }

        .education-card {
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          text-align: center;
          transition: var(--transition);
        }

        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .edu-icon {
          font-size: 3rem;
          margin-bottom: var(--space-lg);
        }

        .education-card h4 {
          font-size: var(--text-lg);
          font-weight: 700;
          margin-bottom: var(--space-md);
        }

        .degree {
          color: var(--color-primary);
          font-weight: 600;
          margin-bottom: var(--space-sm);
        }

        .year {
          color: var(--color-text-muted);
          font-size: var(--text-sm);
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .timeline-marker {
            display: none;
          }

          .timeline-item {
            padding: var(--space-lg);
          }

          .timeline-header {
            flex-direction: column;
            gap: var(--space-sm);
          }

          .duration {
            align-self: flex-start;
          }

          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section >
  );
};

export default About;

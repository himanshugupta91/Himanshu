const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
        <p className="section-subtitle">
          My professional journey and internship experiences in software development
        </p>

        <div className="timeline">
          <div className="timeline-item glass">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-info">
                  <h3>Software Developer Virtual</h3>
                  <p className="company">Google Android Developer Virtual Internship</p>
                </div>
                <span className="duration">July 2024 – Sep 2024</span>
              </div>

              <ul className="timeline-points">
                <li>Completed Google-backed virtual internship focused on Android app development using Kotlin and Android Studio</li>
                <li>Worked on various projects using diverse coding methodologies</li>
                <li>Implemented user authentication, real-time data sync, and cloud storage using Firebase</li>
                <li>Built and deployed fully functional Android apps following Material Design and MVVM architecture</li>
                <li>Debugged and tested applications using Android Profiler, Logcat, and JUnit testing</li>
              </ul>

              <div className="tech-used">
                <span className="tech-badge">Kotlin</span>
                <span className="tech-badge">Android Studio</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">Material Design</span>
                <span className="tech-badge">MVVM</span>
              </div>

              <a
                href="https://drive.google.com/file/d/1K9ApmzqKJ5F6EOkbPyaNEZFLlbblGmEh/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>View Certificate</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-section {
          background: linear-gradient(180deg, rgba(102, 126, 234, 0.02) 0%, transparent 50%, rgba(102, 126, 234, 0.02) 100%);
          position: relative;
        }

        .section-subtitle {
          text-align: center;
          color: var(--color-text-muted);
          font-size: var(--text-lg);
          max-width: 700px;
          margin: -2rem auto 4rem;
          line-height: 1.7;
        }

        .timeline {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          padding-left: 60px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, var(--color-primary), transparent);
        }

        .timeline-item {
          position: relative;
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
          margin-bottom: var(--space-2xl);
          transition: var(--transition);
        }

        .timeline-item:hover {
          transform: translateX(10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .timeline-marker {
          position: absolute;
          left: -52px;
          top: 35px;
          width: 20px;
          height: 20px;
          background: var(--color-primary);
          border-radius: 50%;
          border: 4px solid var(--color-bg);
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.2);
          z-index: 2;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-xl);
          gap: var(--space-lg);
        }

        .timeline-info h3 {
          font-size: var(--text-2xl);
          font-weight: 700;
          margin-bottom: var(--space-xs);
          color: var(--color-text-main);
        }

        .company {
          color: var(--color-primary);
          font-weight: 600;
          font-size: var(--text-lg);
        }

        .duration {
          color: var(--color-text-muted);
          font-size: var(--text-sm);
          white-space: nowrap;
          padding: var(--space-sm) var(--space-lg);
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: var(--radius-full);
          font-weight: 500;
        }

        .timeline-points {
          list-style: none;
          margin-bottom: var(--space-xl);
        }

        .timeline-points li {
          color: var(--color-text-muted);
          margin-bottom: var(--space-md);
          padding-left: var(--space-xl);
          position: relative;
          line-height: 1.7;
          font-size: var(--text-base);
        }

        .timeline-points li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: 700;
          font-size: 1.2rem;
        }

        .tech-used {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-sm);
          margin-bottom: var(--space-xl);
        }

        .tech-badge {
          padding: var(--space-sm) var(--space-md);
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-primary);
          transition: var(--transition);
        }

        .tech-badge:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: translateY(-2px);
        }

        .certificate-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-md) var(--space-xl);
          background: #ffffff;
          color: #000000;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: var(--text-base);
          transition: var(--transition);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
        }

        .certificate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
          background: #f5f5f5;
        }

        .certificate-btn svg:last-child {
          transition: var(--transition);
        }

        .certificate-btn:hover svg:last-child {
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .timeline {
            padding-left: 40px;
          }

          .timeline::before {
            left: 10px;
          }

          .timeline-marker {
            left: -42px;
            width: 16px;
            height: 16px;
          }

          .timeline-item {
            padding: var(--space-xl);
          }

          .timeline-header {
            flex-direction: column;
            gap: var(--space-sm);
          }

          .duration {
            align-self: flex-start;
          }

          .timeline-info h3 {
            font-size: var(--text-xl);
          }

          .section-subtitle {
            font-size: var(--text-base);
            margin: -1.5rem auto 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;

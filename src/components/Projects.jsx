import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  // Get category from tags
  const getCategory = (tags) => {
    if (tags.includes('Spring Boot') && tags.includes('React')) return 'Full Stack';
    if (tags.includes('Spring Boot') || tags.includes('Java')) return 'Backend';
    if (tags.includes('React')) return 'Frontend';
    return 'Other';
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">
          Explore my portfolio of full-stack applications, backend systems, and innovative solutions
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ background: project.gradient }}>
              <div className="project-overlay"></div>

              <div className="project-content">
                <div className="project-header">
                  <span className="project-category">{getCategory(project.tags)}</span>
                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn"
                      onClick={(e) => e.stopPropagation()}
                      title="View Code"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                  {project.tags.length > 4 && <span className="tag">+{project.tags.length - 4}</span>}
                </div>

                <Link to={`/project/${project.id}`} className="view-details-btn">
                  <span>View Details</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background: linear-gradient(180deg, transparent 0%, rgba(102, 126, 234, 0.02) 50%, transparent 100%);
          position: relative;
        }

        .section-subtitle {
          text-align: center;
          color: var(--color-text-muted);
          font-size: var(--text-lg);
          max-width: 600px;
          margin: -2rem auto 4rem;
          line-height: 1.7;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          padding: 1rem 0;
        }

        .project-card {
          border-radius: var(--radius-xl);
          overflow: hidden;
          transition: var(--transition);
          position: relative;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
          transition: var(--transition);
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .project-card:hover .project-overlay {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
        }

        .project-content {
          position: relative;
          z-index: 2;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
          color: white;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .project-category {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-full);
          font-size: var(--text-xs);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .project-actions {
          display: flex;
          gap: 0.5rem;
        }

        .icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: var(--transition);
        }

        .icon-btn:hover {
          background: white;
          color: black;
          transform: scale(1.1);
        }

        .project-title {
          font-size: var(--text-2xl);
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: white;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-size: var(--text-base);
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          padding: 0.4rem 0.8rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
          font-weight: 500;
          color: white;
          backdrop-filter: blur(5px);
        }

        .view-details-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: #ffffff;
          color: #000000;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: var(--text-sm);
          transition: var(--transition);
          align-self: flex-start;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
        }

        .view-details-btn:hover {
          transform: translateX(5px);
          box-shadow: 0 6px 16px rgba(255, 255, 255, 0.5);
          background: #f5f5f5;
        }

        .view-details-btn svg {
          transition: var(--transition);
        }

        .view-details-btn:hover svg {
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-card {
            min-height: 350px;
          }

          .project-content {
            padding: 1.5rem;
          }

          .project-title {
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

export default Projects;

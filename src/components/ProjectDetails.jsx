import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useEffect } from 'react';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2>Project Not Found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-showcase">
      {/* Immersive Header */}
      <div className="showcase-header" style={{ background: project.gradient }}>
        <div className="container header-content">
          <div className="header-actions">
            <Link to="/" className="back-link glass">&larr; Back</Link>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link glass">
              View on GitHub <span className="arrow">↗</span>
            </a>
          </div>
          <h1 className="showcase-title">{project.title}</h1>
          <p className="showcase-subtitle">{project.description}</p>
          <div className="tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="tag glass">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="showcase-content">
          <div className="main-info">
            <div className="project-overview section-block">
              <h2 className="block-title">Overview</h2>
              <p className="description">{project.longDescription}</p>
            </div>


            {project.features && (
              <div className="section-block">
                <h2 className="block-title">Key Features</h2>
                <div className="features-grid">
                  {project.features.map((feature, i) => (
                    <div key={i} className="feature-card glass">
                      <div className="feature-icon">✨</div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="sidebar">
            {project.techStack && (
              <div className="tech-stack glass">
                <h3>Technology Stack</h3>

                {Object.entries(project.techStack).map(([category, techs]) => (
                  <div key={category} className="stack-category">
                    <h4>{category === 'APIs' ? 'APIs' : category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                    <div className="stack-tags">
                      {techs.map((tech, i) => (
                        <span key={i} className="stack-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .project-showcase {
          padding-bottom: 5rem;
        }

        .showcase-header {
          min-height: 60vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 100px;
          padding-bottom: 5rem;
          margin-bottom: 3rem;
        }

        .header-content {
          position: relative;
          z-index: 2;
          color: white;
        }

        .header-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .back-link, .github-link {
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: var(--text-sm);
          transition: var(--transition);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          letter-spacing: 0.02em;
        }

        .back-link {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }

        .back-link:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateX(-3px);
        }

        .github-link {
          background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
          color: #000000;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
        }

        .github-link:hover {
          background: linear-gradient(135deg, #f5f5f5 0%, #cccccc 100%);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .arrow {
          font-size: 1.2rem;
          transition: var(--transition);
        }

        .github-link:hover .arrow {
          transform: translate(2px, -2px);
        }

        .showcase-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          text-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .showcase-subtitle {
          font-size: 1.5rem;
          opacity: 0.9;
          max-width: 800px;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .tag {
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          backdrop-filter: blur(10px);
        }

        .gallery-section {
          margin-bottom: 4rem;
          position: relative;
          z-index: 3;
        }

        .main-image-container {
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 1.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .main-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .thumbnails {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .thumbnail {
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: var(--transition);
        }

        .thumbnail:hover {
          transform: translateY(-5px);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .showcase-content {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 3rem;
          padding-bottom: 5rem;
          margin-bottom: 3rem;
        }

        .section-block {
          margin-bottom: 4rem;
        }

        .block-title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }

        .block-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50%;
          height: 3px;
          background: var(--color-primary);
          border-radius: 2px;
        }

        .sub-title {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: white;
          font-weight: 600;
        }

        .description {
          font-size: 1.2rem;
          line-height: 1.8;
          color: var(--color-text-muted);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .feature-card {
          padding: 2rem;
          border-radius: var(--radius-md);
          transition: var(--transition);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: var(--transition);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .feature-card h4 {
          font-size: var(--text-lg);
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }

        .feature-card p {
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .tech-stack {
          padding: 2rem;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: sticky;
          top: 100px;
        }

        .tech-stack h3 {
          font-size: var(--text-xl);
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }

        .stack-category {
          margin-bottom: 1.5rem;
        }

        .stack-category h4 {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-text-muted);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stack-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .stack-tag {
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          font-size: var(--text-xs);
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          transition: var(--transition);
        }

        .stack-tag:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        @media (max-width: 968px) {
          .showcase-header {
            min-height: auto;
            padding-bottom: 150px;
            margin-bottom: -120px;
          }

          .showcase-title {
            font-size: 2.5rem;
          }

          .showcase-content {
            grid-template-columns: 1fr;
          }

          .tech-stack {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;

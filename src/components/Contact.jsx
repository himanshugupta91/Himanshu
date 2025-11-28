const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
        <p className="section-subtitle">
          Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
        </p>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-cards">
            <a href="mailto:hg1480144@gmail.com" className="contact-card glass">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="card-content">
                <span className="card-label">Email</span>
                <h3>hg1480144@gmail.com</h3>
              </div>
              <div className="card-arrow">→</div>
            </a>

            <a href="https://www.linkedin.com/in/himanshu-gupta-166675202/" target="_blank" rel="noopener noreferrer" className="contact-card glass">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="card-content">
                <span className="card-label">LinkedIn</span>
                <h3>Himanshu Gupta</h3>
              </div>
              <div className="card-arrow">→</div>
            </a>

            <a href="https://github.com/himanshugupta91" target="_blank" rel="noopener noreferrer" className="contact-card glass">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="card-content">
                <span className="card-label">GitHub</span>
                <h3>himanshugupta91</h3>
              </div>
              <div className="card-arrow">→</div>
            </a>

            <a href="https://leetcode.com/u/Iz_himanshu/" target="_blank" rel="noopener noreferrer" className="contact-card glass">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="card-content">
                <span className="card-label">LeetCode</span>
                <h3>Iz_himanshu</h3>
              </div>
              <div className="card-arrow">→</div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="form-container glass">
            <div className="form-header">
              <h3>Send a Message</h3>
              <p>Fill out the form below and I'll get back to you soon!</p>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Collaboration"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="form-input"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <span>Send Message</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(180deg, rgba(102, 126, 234, 0.03) 0%, transparent 100%);
        }

        .section-subtitle {
          text-align: center;
          color: var(--color-text-muted);
          font-size: var(--text-lg);
          max-width: 600px;
          margin: -2rem auto 4rem;
          line-height: 1.7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: var(--space-2xl);
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          padding: var(--space-xl);
          border-radius: var(--radius-xl);
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--gradient-primary);
          transform: scaleY(0);
          transition: var(--transition);
        }

        .contact-card:hover::before {
          transform: scaleY(1);
        }

        .contact-card:hover {
          transform: translateX(10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .card-icon {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: rgba(102, 126, 234, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition);
        }

        .card-icon svg {
          color: var(--color-primary);
        }

        .contact-card:hover .card-icon {
          background: var(--color-primary);
          transform: rotate(5deg) scale(1.1);
        }

        .contact-card:hover .card-icon svg {
          color: white;
        }

        .card-content {
          flex: 1;
        }

        .card-label {
          display: block;
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          margin-bottom: var(--space-xs);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .card-content h3 {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--color-text-main);
        }

        .card-arrow {
          font-size: var(--text-2xl);
          color: var(--color-primary);
          opacity: 0;
          transform: translateX(-10px);
          transition: var(--transition);
        }

        .contact-card:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .form-container {
          padding: var(--space-2xl);
          border-radius: var(--radius-xl);
        }

        .form-header {
          margin-bottom: var(--space-2xl);
        }

        .form-header h3 {
          font-size: var(--text-2xl);
          font-weight: 700;
          margin-bottom: var(--space-sm);
        }

        .form-header p {
          color: var(--color-text-muted);
          font-size: var(--text-base);
        }

        .form-group {
          margin-bottom: var(--space-lg);
        }

        .form-group label {
          display: block;
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: var(--space-sm);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input {
          width: 100%;
          padding: var(--space-md) var(--space-lg);
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          color: var(--color-text-main);
          font-family: inherit;
          font-size: var(--text-base);
          transition: var(--transition);
          resize: vertical;
        }

        .form-input:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .form-input::placeholder {
          color: var(--color-text-dim);
        }

        .submit-btn {
          width: 100%;
          margin-top: var(--space-lg);
          justify-content: center;
          font-size: var(--text-lg);
          padding: var(--space-lg) var(--space-2xl);
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-cards {
            order: 2;
          }

          .form-container {
            order: 1;
          }

          .contact-card {
            padding: var(--space-lg);
          }

          .form-container {
            padding: var(--space-xl);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;

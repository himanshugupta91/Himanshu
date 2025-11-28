const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Animated Background Orbs */}
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <span className="greeting fade-in-up">Hello, I'm</span>
          <h1 className="title fade-in-up">
            Himanshu <span className="gradient-text">Gupta</span>
          </h1>
          <p className="subtitle fade-in-up">
            Java Developer | Spring Boot | Microservices
            <br />
            Crafting scalable backend systems and cloud-native solutions
          </p>

          <div className="hero-btns fade-in-up">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="hero-socials fade-in-up">
            <a href="mailto:hg1480144@gmail.com" className="social-link" title="Email Me">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/himanshu-gupta-166675202/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/himanshugupta91" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://leetcode.com/u/Iz_himanshu/" target="_blank" rel="noopener noreferrer" className="social-link" title="LeetCode">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 0 2rem;
        }

        .hero-bg { /* Changed from hero-background to hero-bg to match HTML */
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
          top: 50%;
          right: 10%;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%);
          bottom: 10%;
          left: 50%;
          animation-delay: 14s;
        }

        .hero-content {
          max-width: 900px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .greeting { /* Renamed from .hero-label to .greeting to match HTML */
          display: inline-block;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
          margin-bottom: 2rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          animation: fadeInUp 0.8s ease-out;
        }

        .title { /* Renamed from .hero-title to .title to match HTML */
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .title .gradient-text { /* Changed from .hero-title .name to .title .gradient-text to match HTML */
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .subtitle { /* Renamed from .hero-subtitle to .subtitle to match HTML */
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          color: var(--color-text-muted);
          margin-bottom: 3rem;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .hero-btns { /* Renamed from .hero-cta to .hero-btns to match HTML */
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .hero-btns .btn { /* Changed from .hero-cta .btn to .hero-btns .btn to match HTML */
          min-width: 180px;
        }

        .hero-socials { /* Renamed from .social-links to .hero-socials to match HTML */
          margin-top: 4rem;
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.8s backwards;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: var(--text-sm);
          font-weight: 500;
          transition: var(--transition);
          text-decoration: none;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .social-link svg {
          width: 18px;
          height: 18px;
        }

        .social-link span {
          letter-spacing: 0.02em;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-muted);
          font-size: var(--text-sm);
          animation: fadeIn 1s ease-out 1s backwards;
        }

        .mouse {
          width: 24px;
          height: 36px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          position: relative;
        }

        .mouse::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 2px;
          animation: scroll 2s ease-in-out infinite;
        }

        @keyframes scroll {
          0%, 100% {
            opacity: 0;
            transform: translateX(-50%) translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) translateY(8px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }

        /* Added fadeIn keyframes as it's used in .scroll-indicator */
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out backwards;
        }

        .fade-in-up:nth-child(1) { animation-delay: 0.1s; }
        .fade-in-up:nth-child(2) { animation-delay: 0.2s; }
        .fade-in-up:nth-child(3) { animation-delay: 0.3s; }
        .fade-in-up:nth-child(4) { animation-delay: 0.4s; }
        .fade-in-up:nth-child(5) { animation-delay: 0.5s; }

        @media (max-width: 768px) {
          .hero {
            min-height: 90vh;
          }

          .title {
            font-size: clamp(2.5rem, 10vw, 3.5rem);
          }

          .subtitle {
            font-size: var(--text-lg);
          }

          .hero-btns {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .hero-socials {
            gap: 0.75rem;
          }

          .social-link {
            padding: 0.6rem 1rem;
            font-size: var(--text-xs);
          }

          .scroll-indicator {
            bottom: 20px;
          }

          .orb {
            filter: blur(60px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

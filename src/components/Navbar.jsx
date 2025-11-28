import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      scrollToSection(href);
    }
  };

  const scrollToSection = (href) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="/" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          Himanshu<span className="dot">.</span>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition);
          padding: 1.5rem 0;
          background: transparent;
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.5px;
          transition: var(--transition);
        }

        .logo:hover {
          color: var(--color-primary);
        }

        .dot {
          color: var(--color-primary);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
        }

        .nav-links a {
          font-weight: 500;
          transition: var(--transition);
          opacity: 0.8;
          font-size: 0.95rem;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: var(--transition);
        }

        .nav-links a:hover {
          opacity: 1;
          color: var(--color-primary);
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          z-index: 1001;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .bar {
          width: 25px;
          height: 2px;
          background: var(--color-text-main);
          transition: var(--transition);
          border-radius: 2px;
        }

        .menu-btn .bar.active:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .menu-btn .bar.active:nth-child(2) {
          opacity: 0;
        }

        .menu-btn .bar.active:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        @media (max-width: 768px) {
          .menu-btn {
            display: flex;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 70%;
            background: rgba(10, 10, 15, 0.98);
            backdrop-filter: blur(16px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            transform: translateX(100%);
            transition: var(--transition);
            box-shadow: -10px 0 30px rgba(0,0,0,0.5);
            border-left: 1px solid rgba(255, 255, 255, 0.08);
          }

          .nav-links.active {
            transform: translateX(0);
          }

          .nav-links a {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

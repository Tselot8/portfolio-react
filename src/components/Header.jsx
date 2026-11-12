import { useEffect, useRef, useState } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    let frame = null;
    let disposed = false;

    const update = () => {
      frame = null;
      const page = document.documentElement;
      if (Math.ceil(window.scrollY + window.innerHeight) >= page.scrollHeight - 2) {
        setActive('contact');
        return;
      }

      const header = document.querySelector('.signal-header');
      // The collapsed header height stays stable while Bootstrap's menu is open.
      const boundary = (Number.parseFloat(getComputedStyle(header).minHeight) || 80) + 24;
      let current = 'home';
      for (const section of sections) {
        if (document.getElementById(section.id)?.getBoundingClientRect().top <= boundary) {
          current = section.id;
        }
      }
      setActive(current);
    };

    const schedule = () => {
      if (!disposed && frame === null) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('hashchange', schedule);
    window.addEventListener('resize', schedule);
    window.addEventListener('pageshow', schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.querySelector('.app'));
    document.fonts.ready.then(schedule);
    schedule();

    return () => {
      disposed = true;
      if (frame !== null) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('hashchange', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('pageshow', schedule);
    };
  }, []);

  return active;
}

function Header() {
  const active = useActiveSection();
  const activeIndex = sections.findIndex((section) => section.id === active);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => {
    if (menuRef.current?.classList.contains('show')) {
      toggleRef.current?.click();
    }
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top signal-header" aria-label="Primary navigation" data-bs-theme="dark">
      <div className="container">
        <div className="signal-brand-group">
        <a className="navbar-brand" href="#home" onClick={closeMenu}>
          <svg className="signal-brand-orbit" viewBox="0 0 28 28" aria-hidden="true" focusable="false">
            <circle cx="14" cy="14" r="10" />
            <path d="M1 14h6m14 0h6M14 1v6" />
            <circle className="signal-orbit-node" cx="21" cy="21" r="2" />
          </svg>
          Tselot Million<span className="signal-brand-dot" aria-hidden="true">.</span>
        </a>
          <span className="signal-mobile-current">
            <span className="visually-hidden">Current section: </span>
            <span aria-hidden="true">{String(activeIndex + 1).padStart(2, '0')} /</span> {sections[activeIndex].label}
          </span>
        </div>
        <button ref={toggleRef} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation menu">
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <div ref={menuRef} className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {sections.map((section) => (
              <li className="nav-item" key={section.id}>
                <a className="nav-link" href={`#${section.id}`} aria-current={active === section.id ? 'location' : undefined} onClick={closeMenu}>{section.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    <nav className="signal-index" aria-label="Signal Index">
      <ol>
        {sections.map((section, index) => (
          <li key={section.id}>
            <a href={`#${section.id}`} aria-current={active === section.id ? 'location' : undefined} aria-label={`${section.label}, section ${index + 1} of ${sections.length}`}>
              <span className="signal-index-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="signal-index-label" aria-hidden="true">{section.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
    </>
  );
}

export default Header;

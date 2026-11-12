import myPhoto from '../assets/my-photo.jpg';
import Header from './Header.jsx';
export default function Hero() {
  return (
    <section id="home" className="signal-hero">
      <Header />
      <div className="container signal-hero-layout">
        <div className="signal-hero-copy">
          <div className="signal-hero-note" aria-hidden="true"><span>01 /</span><span className="signal-rule" /></div>
          <h1 className="signal-hero-title">
            <span className="signal-hero-first">Web Dev</span>{' '}
            <span className="signal-hero-second"><span className="signal-hero-amp">&amp;</span> More</span>
          </h1>
          <div className="signal-hero-details">
            <p className="signal-hero-tagline">Tselot Million - Creative Web Developer Building Modern Solutions</p>
            <a href="#contact" className="btn signal-cta">Hire Me <span aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
        <div className="signal-portrait-panel">
          <div className="signal-portrait-frame">
            <img src={myPhoto} alt="Tselot Million" width="1050" height="1350" className="signal-portrait" fetchPriority="high" />
          </div>
          <svg className="signal-portrait-orbit" viewBox="0 0 480 560" aria-hidden="true" focusable="false">
            <ellipse className="signal-orbit-track" cx="240" cy="280" rx="218" ry="249" transform="rotate(-16 240 280)" />
            <ellipse className="signal-orbit-arc" cx="248" cy="274" rx="210" ry="248" transform="rotate(-16 248 274)" />
            <path className="signal-orbit-register" d="M229 24h22m-11-11v22M28 280h22m-11-11v22M420 458h22m-11-11v22M135 524h22m-11-11v22" />
            <circle className="signal-orbit-point" cx="438" cy="175" r="4" />
            <circle className="signal-orbit-point signal-orbit-point-coral" cx="82" cy="454" r="3" />
          </svg>
          <span className="signal-portrait-accent" aria-hidden="true">TM / 01</span>
        </div>
      </div>
    </section>
  );
}

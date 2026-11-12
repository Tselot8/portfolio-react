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
      </div>
    </section>
  );
}

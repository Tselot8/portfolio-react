import homePage from '../assets/home-page.png'
import Header from './Header.jsx';
export default function Hero() {
  return (
    <>
    <section id="home" className="min-vh-100 d-flex align-items-center justify-content-center text-center hero-bg">
       <Header />
      <div className="container">
        <h1 className="display-3 fw-bold text-white mb-4">Web Dev & More</h1>
        <p className="lead mb-5">Creative Web Developer Building Modern Solutions</p>
        <a href="#contact" className="btn btn-primary btn-lg">Hire Me</a>
      </div>
    </section>
    </>
  );
}
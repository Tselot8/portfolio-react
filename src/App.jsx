import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/custom.css';

function App() {
  return (
    <div className='app'>
      <Hero />
      <div className='bg1'>
      <About />
      <Services />
      </div>
      <div className='bg2'>
      <Portfolio />
      <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
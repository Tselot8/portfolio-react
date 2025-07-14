import React, { useEffect } from 'react';
import myPhoto from '../assets/my-photo.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="py-5">
      <div className="container text-center">
        <div className="scroll-wrapper">
          <h2 className="scroll-text display-4 fw-bold mb-5 about-title" data-aos="fade-up">About Me</h2>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-4 text-center mb-4 mb-md-0" data-aos="fade-right">
            <img
              src={myPhoto}
              alt="Tselot Million"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: '250px', border: '3px solid var(--primary-purple)' }}
            />
          </div>

          <div className="col-md-8" data-aos="fade-left">
            <div className="lead about-bio text-start">
              <p>Hello there, thank you for taking the time to try and get to know me. My name is Tselot Million, and I am currently a twenty-one-year-old Software Engineering student at Addis Ababa University. I strive to graduate with a good GPA while nurturing my passion for creative web design and app development.</p>

              <p>Since joining the department, I’ve uncovered a deep love for programming. Despite being relatively new to coding, I’ve realized I have a natural talent for designing problem-solving algorithms. I find great joy in building systems that are both efficient and elegant.</p>

              <p>My academic path has introduced me to multiple courses that shaped my understanding of computer science and software systems. These include core programming, algorithms, web development, and system architecture—empowering me to bring my ideas to life through technology.</p>

              <p>Outside of the classroom, I dedicate time to personal projects that test my creativity and push my technical boundaries. I’m always exploring ways to improve user experience through clean interfaces, intuitive designs, and accessible, high-performing code.</p>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Skills */}
          <div className="col-12 col-md-3">
            <div className="card h-100 about-card float-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="card-body">
                <h3 className="card-title h5">Skills</h3>
                <p>I enjoy building scalable, elegant solutions with a focus on usability and responsiveness.</p>
                <ul className="list-unstyled">
                  <li><strong>HTML & CSS:</strong> Semantic markup, Flexbox, Grid systems, animations</li>
                  <li><strong>JavaScript & React:</strong> SPA, hooks, props/state, component-driven design</li>
                  <li><strong>Bootstrap & UI/UX:</strong> Fast prototyping, mobile-first design, layout systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="col-12 col-md-3">
            <div className="card h-100 about-card float-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="card-body">
                <h3 className="card-title h5">Experience</h3>
                <p>I’ve spent the last two years working on various web projects—from simple portfolios to feature-rich applications. I’m familiar with solo and collaborative workflows and agile development.</p>
                <p>Working across front-end and back-end stacks, I’ve sharpened my problem-solving abilities and gained hands-on experience with real-world development pipelines.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="col-12 col-md-3">
            <div className="card h-100 about-card float-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="card-body">
                <h3 className="card-title h5">Education</h3>
                <p>I’m currently pursuing my Bachelor's in Software Engineering at Addis Ababa University. My education focuses on theoretical foundations and practical applications of software systems.</p>
                <ul className="list-unstyled">
                  <li>Data Structures & Algorithms</li>
                  <li>Web & Mobile Development</li>
                  <li>Object-Oriented Programming</li>
                  <li>Database Systems & SQL</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Passion */}
          <div className="col-12 col-md-3">
            <div className="card h-100 about-card float-card" data-aos="zoom-in" data-aos-delay="400">
              <div className="card-body">
                <h3 className="card-title h5">Passion</h3>
                <p>I am passionate about bridging the gap between design and development. I find joy in bringing static concepts to life with animation, interactivity, and functionality.</p>
                <p>Whether it’s debugging a tough issue or polishing a UI for perfect accessibility, I thrive on detail and creativity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

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
    <section id="about" className="signal-about">
      <div className="container">
        <div className="signal-section-heading">
          <span className="signal-section-index" aria-hidden="true">02 / PROFILE</span>
          <span className="signal-rule" aria-hidden="true" />
          <h2 className="signal-section-title about-title" data-aos="fade-up">About Me</h2>
        </div>

        <div className="signal-about-intro">
          <div className="signal-about-story" data-aos="fade-left">
            <div className="about-bio">
              <p>Hello there, thank you for taking the time to try and get to know me. My name is Tselot Million, and I am currently a twenty-one-year-old Software Engineering student at Addis Ababa University. I strive to graduate with a good GPA while nurturing my passion for creative web design and app development.</p>

              <p>Since joining the department, I’ve uncovered a deep love for programming. Despite being relatively new to coding, I’ve realized I have a natural talent for designing problem-solving algorithms. I find great joy in building systems that are both efficient and elegant.</p>

              <p>My academic path has introduced me to multiple courses that shaped my understanding of computer science and software systems. These include core programming, algorithms, web development, and system architecture-empowering me to bring my ideas to life through technology.</p>

              <p>Outside of the classroom, I dedicate time to personal projects that test my creativity and push my technical boundaries. I’m always exploring ways to improve user experience through clean interfaces, intuitive designs, and accessible, high-performing code.</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1Imb1JZzPOBF666TTSfAJiIjuwH4R38YS/view?usp=sharing"
              className="signal-pitch-link"
            >
              Watch my pitch <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
          <div className="signal-about-portrait" data-aos="fade-right">
            <img
              src={myPhoto}
              alt="Tselot Million"
              className="signal-about-photo"
              width="1050"
              height="1350"
              loading="lazy"
            />
            <span className="signal-profile-note" aria-hidden="true"><span className="signal-rule" />TM / 02</span>
          </div>
        </div>

        <div className="signal-profile-grid">
          {/* Skills */}
          <div className="signal-profile-block signal-profile-skills">
            <div className="signal-profile-content" data-aos="zoom-in" data-aos-delay="100">
              <div className="signal-profile-body">
                <span className="signal-profile-index" aria-hidden="true">01 /</span>
                <h3>Skills</h3>
                <p>I enjoy building scalable, elegant solutions with a focus on usability and responsiveness.</p>
                <ol className="signal-skill-index">
                  <li><span className="signal-skill-number" aria-hidden="true">01</span><div><strong>HTML & CSS:</strong> Semantic markup, Flexbox, Grid systems, animations</div></li>
                  <li><span className="signal-skill-number" aria-hidden="true">02</span><div><strong>JavaScript & React:</strong> SPA, hooks, props/state, component-driven design</div></li>
                  <li><span className="signal-skill-number" aria-hidden="true">03</span><div><strong>Bootstrap & UI/UX:</strong> Fast prototyping, mobile-first design, layout systems</div></li>
                </ol>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="signal-profile-block signal-profile-experience">
            <div className="signal-profile-content" data-aos="zoom-in" data-aos-delay="200">
              <div className="signal-profile-body">
                <span className="signal-profile-index" aria-hidden="true">02 /</span>
                <h3>Experience</h3>
                <p>I’ve spent the last two years working on various web projects-from simple portfolios to feature-rich applications. I’m familiar with solo and collaborative workflows and agile development.</p>
                <p>Working across front-end and back-end stacks, I’ve sharpened my problem-solving abilities and gained hands-on experience with real world development pipelines.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="signal-profile-block signal-profile-education">
            <div className="signal-profile-content" data-aos="zoom-in" data-aos-delay="300">
              <div className="signal-profile-body">
                <span className="signal-profile-index" aria-hidden="true">03 /</span>
                <h3>Education</h3>
                <p>I’m currently pursuing my <strong>Bachelor's in Software Engineering</strong> at <strong>Addis Ababa University</strong>. My education focuses on theoretical foundations and practical applications of software systems.</p>
                <ul className="signal-education-topics">
                  <li>- Data Structures & Algorithms</li>
                  <li>- Web & Mobile Development</li>
                  <li>- Object-Oriented Programming</li>
                  <li>- Database Systems & SQL</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Passion */}
          <div className="signal-profile-block signal-profile-passion">
            <div className="signal-profile-content" data-aos="zoom-in" data-aos-delay="400">
              <div className="signal-profile-body">
                <span className="signal-profile-index" aria-hidden="true">04 /</span>
                <h3>Passion</h3>
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

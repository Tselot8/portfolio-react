import { useState } from 'react';
import kiloEats1 from '../assets/kiloeats-1.png';
import kiloEats2 from '../assets/kiloeats-2.png';
import kiloEats3 from '../assets/kiloeats-3.png';
import skillBoost2 from '../assets/skill-boost-2.png';
import skillBoost3 from '../assets/skill-boost-3.png';
import skillBoost4 from '../assets/skill-boost-4.png';
import nexusDiscover from '../assets/nexus-discover.jpg';
import nexusVoting from '../assets/nexus-voting.jpg';
import nexusResults from '../assets/nexus-results.jpg';
import cvFile from '../assets/TMN CV.pdf';

const projects = [
  {
    id: 'nexus',
    title: 'Project Nexus',
    description: 'Project Nexus is a full-stack polling platform built with React and Django, allowing users to create, manage, and participate in public and private polls. It features secure authentication, customizable voting options, real-time results, and interactive analytics, with PostgreSQL for data storage.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Docker', 'Render', 'Neon', 'GitHub Actions'],
    liveHref: 'https://project-nexus-staging.onrender.com/',
    href: 'https://github.com/Tselot8/alx-project-nexus',
    linkText: 'View GitHub Repo',
    images: [
      { src: nexusDiscover, label: 'Discover', alt: 'Project Nexus Discover page with public poll search and category, status, and sort filters.', width: 1280, height: 662 },
      { src: nexusVoting, label: 'Voting', alt: 'Project Nexus public poll cards showing questions, categories, poll types, and voting links.', width: 1280, height: 664 },
      { src: nexusResults, label: 'Results', alt: 'Project Nexus poll results showing participant and selection counts with percentage bar charts.', width: 1280, height: 662 },
    ],
  },
  {
    id: 'kiloeats',
    title: "KiloEats App (Restaurant's side)",
    description: 'An interactive food delivery app with data visualizations, price displays, and real-time food options.',
    href: 'https://kiloeats-frontend.vercel.app/',
    images: [
      { src: kiloEats1, label: 'Add new food', width: 1887, height: 998 },
      { src: kiloEats2, label: 'Edit your menu', width: 1885, height: 1003 },
      { src: kiloEats3, label: 'Restaurant profile', width: 1908, height: 1003 },
    ],
  },
  {
    id: 'skillboost',
    title: 'SkillBoost Mobile App (UI design)',
    description: 'A modern learning platform with dynamic content loading and a clean skill sharing experience.',
    href: 'https://www.figma.com/design/kTZnZgR3yWSEuBHQVpWjAD/SkillBoost-figma-design?node-id=0-1&t=WXUAQ1D9Ga6B2w1Y-1',
    portrait: true,
    images: [
      { src: skillBoost4, label: 'Creator profile', width: 386, height: 872 },
      { src: skillBoost2, label: 'Learning dashboard', width: 377, height: 841 },
      { src: skillBoost3, label: 'Course overview', width: 393, height: 879 },
    ],
  },
];

function ProjectContactSheet({ project }) {
  const [selected, setSelected] = useState(0);
  const image = project.images[selected];
  const previewId = `project-preview-${project.id}`;

  return (
    <>
      <div className="signal-project-preview" id={previewId}>
        <img src={image.src} alt={image.alt || `${project.title}: ${image.label}`} width={image.width} height={image.height} loading="lazy" decoding="async" />
      </div>
      <div className="signal-project-thumbs" role="group" aria-label={`${project.title} screenshots`}>
        {project.images.map((thumbnail, index) => (
          <button
            key={thumbnail.src}
            type="button"
            className="signal-project-thumb"
            aria-label={`Show ${thumbnail.label.toLowerCase()} for ${project.title}, screenshot ${index + 1} of ${project.images.length}`}
            aria-pressed={selected === index}
            aria-controls={previewId}
            onClick={() => setSelected(index)}
          >
            <img src={thumbnail.src} alt="" width={thumbnail.width} height={thumbnail.height} loading="lazy" decoding="async" />
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
      <p className="signal-preview-caption" aria-live="polite" aria-atomic="true">
        <span className="visually-hidden">Preview </span>
        <span className="signal-preview-count">{String(selected + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}</span>
        <span>{image.label}</span>
      </p>
    </>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="signal-portfolio">
      <div className="container">
        <div className="signal-section-heading">
          <span className="signal-section-index" aria-hidden="true">04 / WORK</span>
          <span className="signal-rule" aria-hidden="true" />
          <h2 className="signal-section-title">Portfolio</h2>
        </div>
        <p className="signal-portfolio-intro">Open the following projects with a PC for a better experience.</p>

        <div className="signal-project-list">
          {projects.map((project, index) => (
            <article className="signal-project" key={project.id} aria-labelledby={`portfolio-${project.id}`}>
              <header className="signal-project-heading">
                <span className="signal-project-number" aria-hidden="true">{String(index + 1).padStart(2, '0')} /</span>
                <h3 id={`portfolio-${project.id}`}>{project.title}</h3>
              </header>

              <div className={`signal-project-media${project.portrait ? ' signal-project-media--phone' : ''}`}>
                <ProjectContactSheet project={project} />
              </div>

              <div className="signal-project-description">
                <p>{project.description}</p>
                {project.technologies && (
                  <ul className="signal-project-technologies" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                )}
                <div className="d-flex flex-column align-items-start">
                  {project.liveHref && (
                    <a href={project.liveHref} className="signal-project-link">
                      View Live Website <span aria-hidden="true">&#8599;</span>
                    </a>
                  )}
                  <a href={project.href} className="signal-project-link">
                    {project.linkText || 'View Project'} <span aria-hidden="true">&#8599;</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="signal-portfolio-cv">
          <span className="signal-cv-label" aria-hidden="true">CV / PDF</span>
          <span className="signal-rule" aria-hidden="true" />
          <a href={cvFile} download="Tselot-Million-Negussie-CV.pdf" className="signal-download">
            Download CV <span aria-hidden="true">&#8595;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
